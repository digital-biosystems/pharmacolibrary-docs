<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sugammadex&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sugammadex_Hodge2026_reference&quot;,&quot;label&quot;:&quot;Hodge_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Hodge2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sugammadex_Ji2023v2_reference&quot;,&quot;label&quot;:&quot;Ji_2023_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sugammadex_Ji2023_reference&quot;,&quot;label&quot;:&quot;Ji_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# sugammadex

- **generic name:** sugammadex
- **ATC codes:** `V03AB35`
- **DrugBank:** [DB06206](https://go.drugbank.com/drugs/DB06206) · **PubChem:** [CID 6918585](https://pubchem.ncbi.nlm.nih.gov/compound/6918585)
- **molar mass:** 2002.12 g/mol (C72H112O48S8) — DrugBank
- **groups:** approved, investigational

## About

Sugammadex is an antidote used to reverse neuromuscular blockade caused by muscle relaxants during anaesthesia. It is approved and authorised in the European Union, where several sugammadex products are on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q81987842](https://www.wikidata.org/wiki/Q81987842) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sugammadex | parent | 2002.12 | C72H112O48S8 | DrugBank | [6918585](https://pubchem.ncbi.nlm.nih.gov/compound/6918585) | Hodge_2026, Ji_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:46 | 5:30 | 2/0/1 | 5/0/0 | 0/0/0 | 273,159/16,296 | ollama / glm-5.3-flash | 8 | 0/8 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> | [Hodge_2026_reference](drugs/drug_sugammadex/Sugammadex_Hodge2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Hodge AT et al., Plasma levels and postpartum breastmilk…, International journal of ob… (2026) | [10.1016/j.ijoa.2026.104874](https://doi.org/10.1016/j.ijoa.2026.104874) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.167). Primary extraction retained.">cross-check: partial</span> | [Ji_2023_2_reference](drugs/drug_sugammadex/Sugammadex_Ji2023v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ji SH et al., Conventional reversal of rocuronium-ind…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1127932](https://doi.org/10.3389/fphar.2023.1127932) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Ji_2023_reference](drugs/drug_sugammadex/Sugammadex_Ji2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Ji SH et al., Reversal of rocuronium-induced intense…, Clinical and translational… (2023) | [10.1111/cts.13429](https://doi.org/10.1111/cts.13429) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Bosch_2016_APTT](drugs/drug_sugammadex/pd_Bosch_2016_APTT.md) | activated partial thromboplastin time ← sugammadex · stimulation effect | — | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Bosch_2016_PT_INR](drugs/drug_sugammadex/pd_Bosch_2016_PT_INR.md) | prothrombin time international normalized ratio ← sugammadex · stimulation effect | — | Bosch R et al., A PK-PD model-based assessment of sugam…, European journal of pharmac… (2016) | [10.1016/j.ejps.2015.12.028](https://doi.org/10.1016/j.ejps.2015.12.028) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fedor_2026_ST_force_amplitude](drugs/drug_sugammadex/pd_Fedor_2026_ST_force_amplitude.md) | Recovery of ST force amplitude (reversal of rocuronium-induced neuromuscular blockade) ← sugammadex · direct sigmoid Emax (Hill) effect | — | Fedor M et al., The effect of dexmedetomidine on rocuro…, Intensive care medicine exp… (2026) | [10.1186/s40635-025-00850-9](https://doi.org/10.1186/s40635-025-00850-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Grześkowiak_2023_TOF](drugs/drug_sugammadex/pd_Grze_kowiak_2023_TOF.md) | Train-of-Four (TOF) ratio ← rocuronium (biophase; reversal by sugammadex via rocuronium–sugammadex complexation) · direct sigmoid Emax (Hill) effect | — | Grześkowiak M et al., Population Pharmacokinetic-Pharmacodyna…, European journal of drug me… (2023) | [10.1007/s13318-022-00809-1](https://doi.org/10.1007/s13318-022-00809-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Kleijn_2011_NMB](drugs/drug_sugammadex/pd_Kleijn_2011_NMB.md) | neuromuscular blockade (rocuronium-induced, reversal by sugammadex) ← sugammadex · inhibition effect | — | Kleijn HJ et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04000.x](https://doi.org/10.1111/j.1365-2125.2011.04000.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Zwiers_2011_TOF](drugs/drug_sugammadex/pd_Zwiers_2011_TOF.md) | train-of-four (TOF) ratio ← rocuronium / vecuronium (free concentration in presence of sugammadex) · inhibition effect | — | Zwiers A et al., Assessment of the potential for displac…, Clinical drug investigation (2011) | [10.2165/11584730-000000000-00000](https://doi.org/10.2165/11584730-000000000-00000) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sugammadex).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
