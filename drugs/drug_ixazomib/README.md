<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ixazomib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ixazomib_Gupta2017_reference&quot;,&quot;label&quot;:&quot;Gupta_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ixazomib/Ixazomib_Gupta2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ixazomib

- **generic name:** ixazomib
- **ATC codes:** `L01XG03`
- **DrugBank:** [DB09570](https://go.drugbank.com/drugs/DB09570) · **PubChem:** [CID 25183872](https://pubchem.ncbi.nlm.nih.gov/compound/25183872)
- **molar mass:** 361.03 g/mol (C14H19BCl2N2O4) — DrugBank
- **groups:** approved, investigational

## About

Ixazomib is a proteasome inhibitor used to treat multiple myeloma and amyloidosis. It is an approved anticancer medicine authorised in the European Union for multiple myeloma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20948663](https://www.wikidata.org/wiki/Q20948663) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ixazomib | parent | 361.03 | C14H19BCl2N2O4 | DrugBank | [25183872](https://pubchem.ncbi.nlm.nih.gov/compound/25183872) | Gupta_2015, Gupta_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:50 | 2:08 | 1/1/1 | 1/0/1 | 0/0/0 | 146,942/12,833 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gupta_2017_reference](drugs/drug_ixazomib/Ixazomib_Gupta2017_reference.md) | ▶ model + simulator | 2-compartment, oral | 9 | Gupta N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0526-4](https://doi.org/10.1007/s40262-017-0526-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2015_reference](drugs/drug_ixazomib/Ixazomib_Gupta2015_reference.md) | — | 1-compartment (no model) | 3 | Gupta N et al., Switching from body surface area-based…, British journal of clinical… (2015) | [10.1111/bcp.12542](https://doi.org/10.1111/bcp.12542) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2019_reference](drugs/drug_ixazomib/Ixazomib_Gupta2019_reference.md) | — | 1-compartment (no model) | 0 | Gupta N et al., Clinical Pharmacology of Ixazomib: The…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0702-1](https://doi.org/10.1007/s40262-018-0702-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Srimani_2022_platelet_count](drugs/drug_ixazomib/pd_Srimani_2022_platelet_count.md) | platelet count ← ixazomib · disease-progression model | model (no simulator) | Srimani JK et al., Population pharmacokinetic/pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12815](https://doi.org/10.1002/psp4.12815) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2022_M_protein](drugs/drug_ixazomib/pd_Srimani_2022_M_protein.md) | M-protein ← ixazomib · indirect response — drug inhibits the production of M-protein | model (no simulator) | Srimani JK et al., Population pharmacokinetic/pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12815](https://doi.org/10.1002/psp4.12815) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2022_diarrhea](drugs/drug_ixazomib/pd_Srimani_2022_diarrhea.md) | diarrhea ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Population pharmacokinetic/pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12815](https://doi.org/10.1002/psp4.12815) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_CR](drugs/drug_ixazomib/pd_Srimani_2023_CR.md) | complete response ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_PFS](drugs/drug_ixazomib/pd_Srimani_2023_PFS.md) | progression-free survival ← ixazomib · time-to-event model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_anemia](drugs/drug_ixazomib/pd_Srimani_2023_anemia.md) | anemia ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_diarrhea](drugs/drug_ixazomib/pd_Srimani_2023_diarrhea.md) | diarrhea ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_dose_escalation](drugs/drug_ixazomib/pd_Srimani_2023_dose_escalation.md) | dose escalation ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_dose_reduction](drugs/drug_ixazomib/pd_Srimani_2023_dose_reduction.md) | dose reduction ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_fatigue](drugs/drug_ixazomib/pd_Srimani_2023_fatigue.md) | fatigue ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_nausea](drugs/drug_ixazomib/pd_Srimani_2023_nausea.md) | nausea ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_neutropenia](drugs/drug_ixazomib/pd_Srimani_2023_neutropenia.md) | neutropenia ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_peripheral_neuropathy](drugs/drug_ixazomib/pd_Srimani_2023_peripheral_neuropathy.md) | peripheral neuropathy ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_rash](drugs/drug_ixazomib/pd_Srimani_2023_rash.md) | rash ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_thrombocytopenia](drugs/drug_ixazomib/pd_Srimani_2023_thrombocytopenia.md) | thrombocytopenia ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Srimani_2023_vomiting](drugs/drug_ixazomib/pd_Srimani_2023_vomiting.md) | vomiting ← ixazomib · categorical (graded) response model | — | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ixazomib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PSMB5 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2015.pdf` | Gupta N et al., Switching from body surface area-based…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12542](https://doi.org/10.1111/bcp.12542) | [25377318](https://pubmed.ncbi.nlm.nih.gov/25377318) | The study reports quantitative population pharmacokinetic parameters for ixazomib, including clearance (2 L/h), absorption rate (Ka 0.5 h^-1), and model structure. |
| `Srimani_2023.pdf` | Srimani JK et al., Dose Titration of Ixazomib Maintenance…, Clinical pharmacology and t… (2023) | popPK | 5 | [10.1002/cpt.2917](https://doi.org/10.1002/cpt.2917) | [37186295](https://pubmed.ncbi.nlm.nih.gov/37186295) | The study reports an exposure-response analysis for ixazomib and mentions "apparent clearance values" in the text, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-06T20:49:14.611663+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gupta_2015_2 | irrelevant | 0 | 0 | This is a cardiac safety (QTc) study that does not report quantitative pharmacokinetic disposition parameters like clearance or volume of distribution for ixazomib. |
| popPK | Gupta_2016 | irrelevant | 4 | 0 | This is an exposure-response analysis that uses individual PK values from a separate, published population PK model rather than reporting new quantitative disposition parameters (CL, V, etc.) for ixazomib itself. |
| popPK | Kumar_2014 | irrelevant | 2 | 0 | This is a phase 1/2 safety and tolerability study that mentions population pharmacokinetic results were used for dose conversion, but no quantitative PK parameters (CL, V, ka, etc.) are reported in the provided evidence. |
| popPK | Schjesvold_2020 | irrelevant | 0 | 0 | The paper is a quality of life analysis from a clinical trial and does not report any pharmacokinetic parameters for ixazomib. |
| popPK | Srimani_2022 | irrelevant | 4 | 0 | The study uses a previously published population PK model for ixazomib to derive exposures for PK/PD and safety/efficacy modeling, but does not report new or original numeric PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Srimani_2023 | relevant | 5 | 0 | The study reports an exposure-response analysis for ixazomib and mentions "apparent clearance values" in the text, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:49 UTC</sub>
