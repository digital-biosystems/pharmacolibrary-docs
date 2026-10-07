<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;perampanel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Perampanel_Jing2023_reference&quot;,&quot;label&quot;:&quot;Jing_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Jing2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Silva2023_base&quot;,&quot;label&quot;:&quot;Silva_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Silva2023_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Silva2023_final&quot;,&quot;label&quot;:&quot;Silva_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Silva2023_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# perampanel

- **generic name:** perampanel
- **ATC codes:** `N03AX22`
- **DrugBank:** [DB08883](https://go.drugbank.com/drugs/DB08883) · **PubChem:** [CID 9924495](https://pubchem.ncbi.nlm.nih.gov/compound/9924495)
- **molar mass:** 349.393 g/mol (C23H15N3O) — DrugBank
- **groups:** approved, investigational

## About

Perampanel is an antiepileptic medicine used to treat epilepsy, including partial seizures and tonic–clonic seizures. It is authorised in the European Union and is an approved drug, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q868658](https://www.wikidata.org/wiki/Q868658) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perampanel | parent | 349.393 | C23H15N3O | DrugBank | [9924495](https://pubchem.ncbi.nlm.nih.gov/compound/9924495) | Li_2024, Silva_2023, Yu_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:17 | 1:53 | 4/2/0 | 1/0/0 | 0/0/0 | 107,483/4,591 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jing_2023_reference](drugs/drug_perampanel/Perampanel_Jing2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Jing S et al., A Single- and Multiple-Dose Pharmacokin…, Clinical drug investigation (2023) | [10.1007/s40261-022-01241-8](https://doi.org/10.1007/s40261-022-01241-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Silva_2023_base](drugs/drug_perampanel/Perampanel_Silva2023_base.md) | ▶ model + simulator | 1-compartment, IV | 2 | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Silva_2023_final](drugs/drug_perampanel/Perampanel_Silva2023_final.md) | ▶ model + simulator | 1-compartment, IV | 2 | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yu_2025_reference](drugs/drug_perampanel/Perampanel_Yu2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Yu L et al., Development and Validation of a Populat…, Drug design, development an… (2025) | [10.2147/DDDT.S499085](https://doi.org/10.2147/DDDT.S499085) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_perampanel/Perampanel_Li2024_reference.md) | — | 1-compartment (no model) | 0 | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_reference](drugs/drug_perampanel/Perampanel_Yang2025_reference.md) | — | 1-compartment (no model) | 0 | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Takenaka_2018_28_day_average_seizure_frequency](drugs/drug_perampanel/pd_Takenaka_2018_28_day_average_seizure_frequency.md) | 28-day average seizure frequency ← perampanel · direct linear effect | — | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Takenaka_2018_responder_probability](drugs/drug_perampanel/pd_Takenaka_2018_responder_probability.md) | responder probability ← perampanel · direct linear effect | — | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=perampanel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer/substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GRIA1 (target), GRIA2 (inhibitor), GRIA3 (inhibitor), GRIA4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 6  ·  extracted 4  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2024.pdf` | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | popPK | 10 | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) | [38572689](https://pubmed.ncbi.nlm.nih.gov/38572689) | The study reports quantitative population PK parameters (CL and V) for perampanel in pediatric humans, with key numeric values provided in the abstract. |
| `Takenaka_2018.pdf` | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) | [29171002](https://pubmed.ncbi.nlm.nih.gov/29171002) | The paper reports population PK parameters for perampanel (CL/F), but specific numeric values for volume of distribution and other model parameters are likely in tables or figures not fully provided in the evidence. |
| `Yang_2025.pdf` | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) | [39902756](https://pubmed.ncbi.nlm.nih.gov/39902756) | The study reports a population pharmacokinetic model for perampanel with specific numeric values for clearance (0.84 L/h) and volume of distribution (64.35 L). |
| `Fujita_2023.pdf` | Fujita Y et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2023) | popPK | 9 | [10.1097/FTD.0000000000001055](https://doi.org/10.1097/FTD.0000000000001055) | [36645709](https://pubmed.ncbi.nlm.nih.gov/36645709) | The paper describes a population pharmacokinetic model for perampanel and confirms that carbamazepine affects clearance, but the specific numeric parameter values (e.g., median CL, V, or induction coefficients) are not present in the provided abstract text, likely residing in tables or figures not included here. |

<sub>queue written 2026-10-07T07:16:44.250072+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dono_2026 | irrelevant | 0 | 0 | The study is a comparative effectiveness trial focusing on seizure outcomes and retention, with no reporting of pharmacokinetic parameters for perampanel or other drugs. |
| popPK | Fujita_2023 | relevant | 9 | 1 | The paper describes a population pharmacokinetic model for perampanel and confirms that carbamazepine affects clearance, but the specific numeric parameter values (e.g., median CL, V, or induction coefficients) are not present in the provided abstract text, likely residing in tables or figures not included here. |
| popPK | Helling_2025 | irrelevant | 0 | 0 | The study investigates cortical excitability and TMS responses, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | Perampanel is one of 14 drugs included in a simulation study, but no specific PK parameter values (CL, V, etc.) for perampanel are reported in the text; they are referenced in supplementary tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:17 UTC</sub>
