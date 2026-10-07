<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;clindamycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clindamycin_Mimram2022_reference&quot;,&quot;label&quot;:&quot;Mimram_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clindamycin/Clindamycin_Mimram2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# clindamycin

- **generic name:** clindamycin
- **ATC codes:** `D10AF01`, `G01AA10`, `J01FF01`
- **DrugBank:** [DB01190](https://go.drugbank.com/drugs/DB01190) · **PubChem:** [CID 446598](https://pubchem.ncbi.nlm.nih.gov/compound/446598)
- **molar mass:** 424.98 g/mol (C18H33ClN2O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Clindamycin is a lincosamide antibiotic used to treat bacterial infections such as staphylococcal and skin infections, acne, dental abscesses, bacterial vaginosis, toxoplasmosis, and pneumocystosis. It is widely used in human medicine and is also approved for veterinary use, and it appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422273](https://www.wikidata.org/wiki/Q422273) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clindamycin | parent | 424.98 | C18H33ClN2O5S | DrugBank | [446598](https://pubchem.ncbi.nlm.nih.gov/compound/446598) | Goulenok_2023, Mimram_2022, Pfaffendorf_2026, Smith_2017, Solli_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:36 | 2:34 | 2/6/0 | 2/0/0 | 0/0/0 | 158,608/10,189 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mimram_2022_reference](drugs/drug_clindamycin/Clindamycin_Mimram2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mimram L et al., Population Pharmacokinetics of Orally A…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11111462](https://doi.org/10.3390/antibiotics11111462) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pfaffendorf_2026_reference](drugs/drug_clindamycin/Clindamycin_Pfaffendorf2026_reference.md) | held back | 1-compartment, oral | 5 | Pfaffendorf C et al., Population pharmacokinetics of fosmidom…, Malaria journal (2026) | [10.1186/s12936-026-05872-6](https://doi.org/10.1186/s12936-026-05872-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gonzalez_2016_reference](drugs/drug_clindamycin/Clindamycin_Gonzalez2016_reference.md) | — | 1-compartment (no model) | 0 | Gonzalez D et al., Clindamycin Pharmacokinetics and Safety…, Antimicrobial agents and ch… (2016) | [10.1128/AAC.03086-15](https://doi.org/10.1128/AAC.03086-15) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Goulenok_2023_reference](drugs/drug_clindamycin/Clindamycin_Goulenok2023_reference.md) | — | 1-compartment (no model) | 1 | Goulenok T et al., Pharmacokinetic interaction between rif…, International journal of an… (2023) | [10.1016/j.ijantimicag.2023.106885](https://doi.org/10.1016/j.ijantimicag.2023.106885) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Magréault_2025_reference](drugs/drug_clindamycin/Clindamycin_Magrault2025_reference.md) | — | 1-compartment (no model) | 0 | Magréault S et al., Dosing and route of administration of c…, Clinical microbiology and i… (2025) | [10.1016/j.cmi.2025.01.005](https://doi.org/10.1016/j.cmi.2025.01.005) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ritter_2022_reference](drugs/drug_clindamycin/Clindamycin_Ritter2022_reference.md) | — | 1-compartment (no model) | 0 | Ritter L et al., Is clindamycin a potential treatment fo…, APMIS : acta pathologica, m… (2022) | [10.1111/apm.13205](https://doi.org/10.1111/apm.13205) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Smith_2017_reference](drugs/drug_clindamycin/Clindamycin_Smith2017_reference.md) | — | 1-compartment (no model) | 0 | Smith MJ et al., Pharmacokinetics of Clindamycin in Obes…, Antimicrobial agents and ch… (2017) | [10.1128/AAC.02014-16](https://doi.org/10.1128/AAC.02014-16) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Solli_2023_reference](drugs/drug_clindamycin/Clindamycin_Solli2023_reference.md) | — | 1-compartment (no model) | 1 | Solli CN et al., Plasma concentration of orally administ…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad002](https://doi.org/10.1093/jac/dkad002) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lenhard_2019_CFU](drugs/drug_clindamycin/pd_Lenhard_2019_CFU.md) | CFU/mL reduction (bacterial killing) biomarker turnover ← clindamycin | — | Lenhard JR et al., Bacterial brothers in arms: cooperation…, The Journal of antimicrobia… (2019) | [10.1093/jac/dkz247](https://doi.org/10.1093/jac/dkz247) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Ramírez-Morales_2022_toxicity_to_the_aquatic_macrophyte_Lemna_minor](drugs/drug_clindamycin/pd_Ram_rez_Morales_2022_toxicity_to_the_aquatic_macrophyte_Lemn.md) | toxicity to the aquatic macrophyte Lemna minor ← clindamycin 2-phosphate · direct sigmoid Emax (Hill) effect | — | Ramírez-Morales D et al., Single and mixture toxicity of selected…, Ecotoxicology (London, Engl… (2022) | [10.1007/s10646-022-02537-3](https://doi.org/10.1007/s10646-022-02537-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clindamycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ORM1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 20 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 8  ·  extracted 2  ·  needs_review 0  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gonzalez_2016.pdf` | Gonzalez D et al., Clindamycin Pharmacokinetics and Safety…, Antimicrobial agents and ch… (2016) | popPK | 10 | [10.1128/AAC.03086-15](https://doi.org/10.1128/AAC.03086-15) | [26926644](https://pubmed.ncbi.nlm.nih.gov/26926644) | The study reports population PK parameters for clindamycin in infants, including specific values for PMA and clearance milestones, though full parameter estimates (CL, V values) are not explicitly listed in the abstract text. |
| `Ritter_2022.pdf` | Ritter L et al., Is clindamycin a potential treatment fo…, APMIS : acta pathologica, m… (2022) | popPK | 10 | [10.1111/apm.13205](https://doi.org/10.1111/apm.13205) | [34978745](https://pubmed.ncbi.nlm.nih.gov/34978745) | The abstract reports a specific PK metric (prostate/plasma ratio of 1.02) and model type, but detailed compartmental parameters like CL, V, and ka are not explicitly listed in the provided text. |
| `Smith_2017.pdf` | Smith MJ et al., Pharmacokinetics of Clindamycin in Obes…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.02014-16](https://doi.org/10.1128/AAC.02014-16) | [28137820](https://pubmed.ncbi.nlm.nih.gov/28137820) | The abstract provides the specific numeric population PK model equations for clearance and volume of distribution for clindamycin. |
| `Goulenok_2023.pdf` | Goulenok T et al., Pharmacokinetic interaction between rif…, International journal of an… (2023) | popPK | 9 | [10.1016/j.ijantimicag.2023.106885](https://doi.org/10.1016/j.ijantimicag.2023.106885) | [37302771](https://pubmed.ncbi.nlm.nih.gov/37302771) | Population PK model for clindamycin is reported, but specific numeric parameter estimates (CL, V, etc.) are not listed in the provided evidence, only the magnitude of change (factor of 16). |
| `Magréault_2025.pdf` | Magréault S et al., Dosing and route of administration of c…, Clinical microbiology and i… (2025) | popPK | 9 | [10.1016/j.cmi.2025.01.005](https://doi.org/10.1016/j.cmi.2025.01.005) | [39827992](https://pubmed.ncbi.nlm.nih.gov/39827992) | Study reports a population PK model for clindamycin with quantitative effects (clearance factor, bioavailability percentages), though absolute parameter values (CL, V) are likely in the full text/tables not fully detailed here. |

<sub>queue written 2026-10-07T07:33:59.726771+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bahnasawy_2025 | irrelevant | 0 | 0 | This is an in vitro time-kill curve (PK/PD) study, which is explicitly categorized as low relevance for population pharmacokinetic parameter extraction. |
| popPK | Baker_2019 | irrelevant | 0 | 0 | The study is an in-vitro microbiology investigation into antibiotic potentiation and does not contain any pharmacokinetic data for clindamycin. |
| popPK | ElKady_2020 | irrelevant | 2 | 0 | The study reports statistical significance of demographic factors on PK parameters but provides no specific quantitative numeric values for clearance, volume, or half-life for clindamycin. |
| popPK | Isla_2005 | irrelevant | 1 | 0 | The study is a literature review using PK/PD simulations with "mean population parameters" but does not report specific quantitative PK parameter values (like CL, V, t1/2) for clindamycin in the evidence provided. |
| popPK | Isla_2005_2 | irrelevant | 2 | 0 | The study is a literature review/simulation comparing PK/PD indices and does not provide original quantitative PK parameter values (CL, V, etc.) for clindamycin. |
| popPK | Isla_2008 | irrelevant | 1 | 0 | The study is a pharmacokinetic/pharmacodynamic modeling analysis using pre-existing population parameters, and it does not report the original quantitative PK values (e.g., clearance, volume) for clindamycin within the provided text. |
| popPK | Korzilius_2023 | relevant | 5 | 3 | The study reports non-compartmental PK parameters (AUC, Cmax, Bioavailability) for clindamycin in humans, but specific clearance/volume values are in the unprovided Table 2/S2. |
| popPK | Lenhard_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic time-kill experiment modeling bacterial killing rates (PD), not pharmacokinetic parameters (PK) for clindamycin. |
| popPK | Maharaj_2020 | irrelevant | 2 | 0 | The paper is a methodological study proposing a new metric (NPDE) for model validation, using a previously developed clindamycin model only as a case study, and it does not report original quantitative PK parameter values (CL, V, etc.) for clindamycin. |
| popPK | Ramírez-Morales_2022 | irrelevant | 0 | 0 | This is an ecotoxicology study measuring toxicity in aquatic plants (Lemna minor), not a pharmacokinetic study for clindamycin. |
| popPK | Vidaillac_2011 | irrelevant | 0 | 0 | This is an in vitro PK/PD study where clindamycin serves only as a comparator, and no pharmacokinetic disposition parameters (CL, V, etc.) for clindamycin are reported. |
| popPK | Zelenitsky_2016 | irrelevant | 1 | 0 | Clindamycin is used only as a comparator in a PK-PD simulation study for surgical prophylaxis, and no quantitative PK parameters (CL, V, ka, etc.) for clindamycin are reported in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:34 UTC</sub>
