<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sugammadex&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sugammadex_Hodge2026_reference&quot;,&quot;label&quot;:&quot;Hodge_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Hodge2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sugammadex_Ji2023_reference&quot;,&quot;label&quot;:&quot;Ji_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sugammadex_Ji2023v2_reference&quot;,&quot;label&quot;:&quot;Ji_2023_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sugammadex

- **generic name:** sugammadex
- **ATC codes:** `V03AB35`
- **DrugBank:** [DB06206](https://go.drugbank.com/drugs/DB06206) · **PubChem:** [CID 6918585](https://pubchem.ncbi.nlm.nih.gov/compound/6918585)
- **molar mass:** 2002.12 g/mol (C72H112O48S8) — DrugBank
- **groups:** approved, investigational

## About

Sugammadex is an antidote used to reverse neuromuscular blockade caused by muscle relaxants during anaesthesia. It is approved and authorised in the European Union, where several sugammadex products are on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q81987842](https://www.wikidata.org/wiki/Q81987842) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sugammadex | parent | 2002.12 | C72H112O48S8 | DrugBank | [6918585](https://pubchem.ncbi.nlm.nih.gov/compound/6918585) | Hodge_2026, Ji_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:46 | 5:30 | 3/0/0 | 5/0/0 | 0/0/0 | 273,159/16,296 | ollama / glm-5.3-flash | 8 | 0/8 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hodge_2026_reference](drugs/drug_sugammadex/Sugammadex_Hodge2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Hodge AT et al., Plasma levels and postpartum breastmilk…, International journal of ob… (2026) | [10.1016/j.ijoa.2026.104874](https://doi.org/10.1016/j.ijoa.2026.104874) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_reference](drugs/drug_sugammadex/Sugammadex_Ji2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Ji SH et al., Reversal of rocuronium-induced intense…, Clinical and translational… (2023) | [10.1111/cts.13429](https://doi.org/10.1111/cts.13429) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ji_2023_2_reference](drugs/drug_sugammadex/Sugammadex_Ji2023v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ji SH et al., Conventional reversal of rocuronium-ind…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1127932](https://doi.org/10.3389/fphar.2023.1127932) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bosch_2016_APTT](drugs/drug_sugammadex/pd_Bosch_2016_APTT.md) | activated partial thromboplastin time ← sugammadex · stimulation effect | — | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Bosch_2016_PT_INR](drugs/drug_sugammadex/pd_Bosch_2016_PT_INR.md) | prothrombin time international normalized ratio ← sugammadex · stimulation effect | — | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fedor_2026_ST_force_amplitude](drugs/drug_sugammadex/pd_Fedor_2026_ST_force_amplitude.md) | Recovery of ST force amplitude (reversal of rocuronium-induced neuromuscular blockade) ← sugammadex · direct sigmoid Emax (Hill) effect | — | Fedor M et al., The effect of dexmedetomidine on rocuro…, Intensive care medicine exp… (2026) | [10.1186/s40635-025-00850-9](https://doi.org/10.1186/s40635-025-00850-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Grześkowiak_2023_TOF](drugs/drug_sugammadex/pd_Grze_kowiak_2023_TOF.md) | Train-of-Four (TOF) ratio ← rocuronium (biophase; reversal by sugammadex via rocuronium–sugammadex complexation) · direct sigmoid Emax (Hill) effect | — | Grześkowiak M et al., Population Pharmacokinetic-Pharmacodyna…, European journal of drug me… (2023) | [10.1007/s13318-022-00809-1](https://doi.org/10.1007/s13318-022-00809-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kleijn_2011_NMB](drugs/drug_sugammadex/pd_Kleijn_2011_NMB.md) | neuromuscular blockade (rocuronium-induced, reversal by sugammadex) ← sugammadex · inhibition effect | — | Kleijn HJ et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04000.x](https://doi.org/10.1111/j.1365-2125.2011.04000.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zwiers_2011_TOF](drugs/drug_sugammadex/pd_Zwiers_2011_TOF.md) | train-of-four (TOF) ratio ← rocuronium / vecuronium (free concentration in presence of sugammadex) · inhibition effect | — | Zwiers A et al., Assessment of the potential for displac…, Clinical drug investigation (2011) | [10.2165/11584730-000000000-00000](https://doi.org/10.2165/11584730-000000000-00000) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sugammadex) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hodge_2026.pdf` | Hodge AT et al., Plasma levels and postpartum breastmilk…, International journal of ob… (2026) | popPK | 10 | [10.1016/j.ijoa.2026.104874](https://doi.org/10.1016/j.ijoa.2026.104874) | [41747364](https://pubmed.ncbi.nlm.nih.gov/41747364) | Population PK (Monolix, two-compartment) with explicit numeric V (13.9 L) and CL (8.0 L/h) for sugammadex reported in the abstract. |
| `Kleijn_2011.pdf` | Kleijn HJ et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2011) | popPK | 10 | [10.1111/j.1365-2125.2011.04000.x](https://doi.org/10.1111/j.1365-2125.2011.04000.x) | [21535448](https://pubmed.ncbi.nlm.nih.gov/21535448) | Population PK model of sugammadex in humans, but numeric CL/V parameters are not shown in the abstract (likely in tables/supplement not provided). |
| `Tang_2025.pdf` | Tang Y et al., Reversal of rocuronium-induced neuromus…, Journal of clinical anesthe… (2025) | popPK | 10 | [10.1016/j.jclinane.2025.111900](https://doi.org/10.1016/j.jclinane.2025.111900) | [40513142](https://pubmed.ncbi.nlm.nih.gov/40513142) | Human NCA PK study of sugammadex with clearance and half-life values reported directly in the abstract. |
| `Ploeger_2009.pdf` | Ploeger BA et al., Pharmacokinetic-pharmacodynamic model f…, Anesthesiology (2009) | popPK | 7 | [10.1097/ALN.0b013e318190bc32](https://doi.org/10.1097/ALN.0b013e318190bc32) | [19104176](https://pubmed.ncbi.nlm.nih.gov/19104176) | A PK-PD interaction model for sugammadex in humans is described, but no numeric PK parameter values appear in the evidence (likely in tables/supplementary not provided). |

<sub>queue written 2026-10-07T19:42:52.851935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bosch_2016 | irrelevant | 3 | 1 | This is a PK-PD exposure-response model of coagulation effects, not a PK disposition model; no CL/V or other disposition parameter values appear in the evidence. |
| popPK | Cho_2018 | irrelevant | 0 | 0 | In-vitro rat phrenic nerve-diaphragm study of rocuronium blockade and sugammadex reversal; no PK disposition parameters (CL, V, half-life, PK model) for sugammadex are reported. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | This is a retrospective utilization study of reversal strategies; no PK parameters (CL, V, half-life, or model) for sugammadex are reported. |
| popPK | Fedor_2026 | irrelevant | 1 | 2 | In vitro organ-bath pharmacodynamic study (EC50 of neuromuscular blockade reversal) with no PK disposition parameters (CL, V, half-life, PK model) for sugammadex. |
| popPK | Grześkowiak_2023 | relevant | 8 | 3 | Population PK/PD model of sugammadex in children with parameters (VS1, VS2, CLS1, CLS2) defined, but numeric parameter values appear to live in Table S1/supplementary material not provided in the evidence. |
| popPK | Kim_2020 | irrelevant | 1 | 0 | In vitro rat hemidiaphragm pharmacodynamics of rocuronium/sugammadex reversal; no PK disposition parameters (CL, V, half-life, PK model) for sugammadex are reported. |
| popPK | Kleijn_2011 | relevant | 10 | 3 | Population PK model of sugammadex in humans, but numeric CL/V parameters are not shown in the abstract (likely in tables/supplement not provided). |
| popPK | Nigrovic_2007 | irrelevant | 2 | 0 | A simulation study with hypothetical drugs D and X, not sugammadex itself; no numeric PK parameter values for sugammadex are reported. |
| popPK | Oh_2019 | irrelevant | 0 | 0 | This is an outcomes study of readmission/hospital stay with no PK parameters for sugammadex. |
| popPK | Ploeger_2009 | relevant | 7 | 2 | A PK-PD interaction model for sugammadex in humans is described, but no numeric PK parameter values appear in the evidence (likely in tables/supplementary not provided). |
| popPK | Suganuma_2021 | irrelevant | 0 | 0 | Clinical study of oesophageal barrier pressure with sugammadex as reversal agent; no PK parameters reported. |
| popPK | Yasuma_2025 | irrelevant | 2 | 1 | Sugammadex is only the antagonist/co-administered agent; the PK–PD model (Kleijn) simulates rocuronium effect-site concentrations, and no quantitative disposition parameters (CL, V, Q) for sugammadex itself are reported. |
| popPK | Zwiers_2011 | irrelevant | 3 | 2 | This is a drug-interaction/binding modelling study; sugammadex's own population PK parameters are referenced but no quantitative disposition values (CL, V, half-life) are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:43 UTC</sub>
