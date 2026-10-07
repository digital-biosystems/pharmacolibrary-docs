<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;efavirenz&quot;}]"></div>

# efavirenz

- **generic name:** efavirenz
- **ATC codes:** `J05AG03`, `J05AR06`, `J05AR11`
- **DrugBank:** [DB00625](https://go.drugbank.com/drugs/DB00625) · **PubChem:** [CID 64139](https://pubchem.ncbi.nlm.nih.gov/compound/64139)
- **molar mass:** 315.675 g/mol (C14H9ClF3NO2) — DrugBank
- **groups:** approved, investigational

## About

Efavirenz is a non-nucleoside reverse transcriptase inhibitor used to treat HIV infection and HIV/AIDS. It is widely used, appears on the WHO essential medicines list, and is authorised in the European Union, both alone and in combination antiviral products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422645](https://www.wikidata.org/wiki/Q422645) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| efavirenz | parent | 315.675 | C14H9ClF3NO2 | DrugBank | [64139](https://pubchem.ncbi.nlm.nih.gov/compound/64139) | Barrett_2002, Chala_2023, Vucicevic_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:41 | 5:19 | 0/1/2 | 1/0/0 | 0/0/0 | 223,209/13,354 | einfracz / qwen3.8-27b | 26 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Barrett_2002_reference](drugs/drug_efavirenz/Efavirenz_Barrett2002_reference.md) | — | 1-compartment (no model) | 3 | Barrett JS et al., Population pharmacokinetic meta-analysi…, International journal of cl… (2002) | [10.5414/cpp40507](https://doi.org/10.5414/cpp40507) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Vucicevic_2025_reference](drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md) | — | 1-compartment (no model) | 3 | Vucicevic K et al., Population Pharmacokinetic-Pharmacogene…, Cureus (2025) | [10.7759/cureus.88533](https://doi.org/10.7759/cureus.88533) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chala_2023_reference](drugs/drug_efavirenz/Efavirenz_Chala2023_reference.md) | — | 1-compartment (no model) | 1 | Chala A et al., Genetic and non-genetic factors influen…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12951](https://doi.org/10.1002/psp4.12951) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ngaimisi_2014_4_hydroxycholesterol](drugs/drug_efavirenz/pd_Ngaimisi_2014_4_hydroxycholesterol.md) | 4β-hydroxycholesterol ← efavirenz · indirect response — drug stimulates the production of 4β-hydroxycholesterol | — | Ngaimisi E et al., Pharmacokinetic and pharmacogenomic mod…, The Journal of antimicrobia… (2014) | [10.1093/jac/dku286](https://doi.org/10.1093/jac/dku286) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=efavirenz) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inducer/substrate, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `CYP3A7` inducer, `SLC22A1` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `UGT1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 217 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2002.pdf` | Barrett JS et al., Population pharmacokinetic meta-analysi…, International journal of cl… (2002) | popPK | 10 | [10.5414/cpp40507](https://doi.org/10.5414/cpp40507) | [12698988](https://pubmed.ncbi.nlm.nih.gov/12698988) | The paper presents a population pharmacokinetic model for efavirenz in humans with explicit numeric values for clearance (single and multiple dose), intersubject variability for CL and V, and residual variability. |

<sub>queue written 2026-10-07T12:37:18.212512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of lumefantrine (an antimalarial), not efavirenz, even though the subjects are receiving efavirenz-based therapy. |
| popPK | Almeida_2021 | irrelevant | 0 | 0 | The study reports toxicological endpoints (IC50/EC50) in aquatic organisms, not pharmacokinetic disposition parameters for efavirenz. |
| popPK | Calderin_2025 | irrelevant | not captured | not captured | The paper focuses on dexamethasone pharmacokinetics and only mentions efavirenz as a co-administered covariate without reporting any quantitative PK parameters for it. |
| popPK | Calderin_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexamethasone, with efavirenz mentioned only as a co-administered drug in a small subgroup; no PK parameters for efavirenz are provided. |
| popPK | Collins_2025 | irrelevant | not captured | not captured | The study models the pharmacokinetics of midazolam as a probe drug to quantify CYP3A induction by efavirenz, rather than reporting population-PK parameters for efavirenz itself. |
| popPK | Cottrell_2013_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dolutegravir, and efavirenz is only mentioned as a comparator drug in clinical trials. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rosuvastatin, with efavirenz serving only as a covariate for cholesterol levels. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir, and efavirenz is only mentioned as a drug interaction requiring dosage adjustment, not as the subject of PK characterization. |
| popPK | Decloedt_2015 | irrelevant | 1 | 0 | This is a review article that discusses CNS penetration concepts and references a specific CSF:plasma ratio for efavirenz, but it does not report original quantitative disposition parameters like CL, V, or Ka. |
| popPK | Dickinson_2016 | relevant | 10 | 2 | The study is a population PK analysis of efavirenz in humans, but the specific numeric parameter values (CL/F, V/F, etc.) are referred to as being in "Online Resource 1 and 2" and the text notes they were carried forward from a previous 48-week analysis without listing the primary model parameters in the provided evidence. |
| popPK | Guidi_2022_2 | irrelevant | 0 | 0 | The paper is a methodological review of population pharmacokinetics that uses efavirenz only as a conceptual example, without reporting original quantitative disposition parameters. |
| popPK | Nemaura_2019 | irrelevant | 4 | 2 | The paper describes a novel theoretical modeling approach for a single patient with vague formula placeholders rather than standard, clearly readable quantitative population PK parameters like CL or V. |
| popPK | Salinger_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug pretomanid, with efavirenz mentioned only as a co-administered drug affecting pretomanid exposure. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for delamanid, not efavirenz; efavirenz is mentioned only as a co-administered covariate affecting delamanid clearance. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:37 UTC</sub>
