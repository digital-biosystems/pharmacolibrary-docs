<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bevacizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bevacizumab_Caulet2016_reference&quot;,&quot;label&quot;:&quot;Caulet_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/Bevacizumab_Caulet2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Park_2023_OS&quot;,&quot;label&quot;:&quot;Park_2023 \u00b7 OS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/pd_Park_2023_OS.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Park_2023_PFS&quot;,&quot;label&quot;:&quot;Park_2023 \u00b7 PFS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_bevacizumab/pd_Park_2023_PFS.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bevacizumab

- **generic name:** bevacizumab
- **ATC codes:** `L01FG01`, `L01XC07`, `S01LA08`
- **DrugBank:** [DB00112](https://go.drugbank.com/drugs/DB00112) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Bevacizumab is a monoclonal antibody that blocks tumour blood vessel growth and is used to treat many cancers, including colorectal, breast, lung, kidney, cervical and ovarian cancers, as well as certain eye conditions such as wet macular degeneration. It is widely used and authorised in the European Union, appears on the WHO list of essential medicines, and is also used off-label in ophthalmology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413299](https://www.wikidata.org/wiki/Q413299) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:23 | 2:38 | 1/2/1 | 2/2/0 | 0/0/0 | 143,221/7,504 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Caulet_2016_reference](drugs/drug_bevacizumab/Bevacizumab_Caulet2016_reference.md) | ▶ model + simulator | 2-compartment, IV | 7 | Caulet M et al., Bevacizumab Pharmacokinetics Influence…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0406-3](https://doi.org/10.1007/s40262-016-0406-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Han_2016_reference](drugs/drug_bevacizumab/Bevacizumab_Han2016_reference.md) | — | 2-compartment (no model) | 5 | Han K et al., Population pharmacokinetics of bevacizu…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-3079-6](https://doi.org/10.1007/s00280-016-3079-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lobet_2024_reference](drugs/drug_bevacizumab/Bevacizumab_Lobet2024_reference.md) | — | general linear (no model) | 2 | Lobet S et al., Confounding mitigation for the exposure…, British journal of clinical… (2024) | [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Turner_2014_reference](drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md) | — | 1-compartment (no model) | 0 | Turner DC et al., Population pharmacokinetics of bevacizu…, Clinical cancer research :… (2014) | [10.1158/1078-0432.CCR-13-2364](https://doi.org/10.1158/1078-0432.CCR-13-2364) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Del_2023_BCVA](drugs/drug_bevacizumab/pd_Del_2023_BCVA.md) | best-corrected visual acuity ← bevacizumab · indirect response — drug stimulates the production of best-corrected visual acuity | — | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Del_2023_CRT](drugs/drug_bevacizumab/pd_Del_2023_CRT.md) | central macular retinal thickness ← bevacizumab · model not identified | — | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rocchetti_2013_tumor_growth](drugs/drug_bevacizumab/pd_Rocchetti_2013_tumor_growth.md) | tumor growth ← bevacizumab · disease-progression model | — | Rocchetti M et al., Predictive pharmacokinetic-pharmacodyna…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2107-z](https://doi.org/10.1007/s00280-013-2107-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Ferl_2015_KEnF](drugs/drug_bevacizumab/pd_Ferl_2015_KEnF.md) | KEnF · indirect response — drug inhibits the production of KEnF | — | Ferl GZ et al., Mixed-effects modeling of clinical DCE-…, Journal of magnetic resonan… (2015) | [10.1002/jmri.24514](https://doi.org/10.1002/jmri.24514) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Park_2023_OS](drugs/drug_bevacizumab/pd_Park_2023_OS.md) | overall survival ← bevacizumab · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Park_2023_PFS](drugs/drug_bevacizumab/pd_Park_2023_PFS.md) | progression-free survival ← bevacizumab · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bevacizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: C1QA (activator), C1QB (activator), C1QC (activator), FCGR1A (activator), FCGR2A (activator), FCGR2B (activator), FCGR2C (activator), FCGR3A (activator), VEGFA (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Del_2023.pdf` | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | popPK | 10 | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) | [37178941](https://pubmed.ncbi.nlm.nih.gov/37178941) | The paper describes a population PK/PD model for bevacizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Petitcollin_2021.pdf` | Petitcollin A et al., Population pharmacokinetics and exposur…, European journal of clinica… (2021) | popPK | 10 | [10.1007/s00228-021-03179-w](https://doi.org/10.1007/s00228-021-03179-w) | [34245336](https://pubmed.ncbi.nlm.nih.gov/34245336) | The paper describes a population PK model for bevacizumab and reports a qualitative half-life, but specific numeric parameter values (CL, V, Q) are not present in the text, likely residing in tables or supplementary data. |
| `Turner_2014.pdf` | Turner DC et al., Population pharmacokinetics of bevacizu…, Clinical cancer research :… (2014) | popPK | 10 | [10.1158/1078-0432.CCR-13-2364](https://doi.org/10.1158/1078-0432.CCR-13-2364) | [24637635](https://pubmed.ncbi.nlm.nih.gov/24637635) | The paper reports a population PK model for bevacizumab in humans and provides specific numeric values for median half-life and volume of distribution in the abstract, though other parameters like clearance estimates are not explicitly listed as numbers in the text. |
| `Lobet_2024.pdf` | Lobet S et al., Confounding mitigation for the exposure…, British journal of clinical… (2024) | popPK | 9 | [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983) | [38072829](https://pubmed.ncbi.nlm.nih.gov/38072829) | The study is a population PK/pharmacodynamic modeling study for bevacizumab in humans, reporting numeric TMDD parameters (R0, KSS, kint) in the text, though standard CL/V parameters are not explicitly listed in the provided abstract. |
| `Rietveld_2024.pdf` | Rietveld PCS et al., Intraperitoneal pharmacokinetics of sys…, Biomedicine & pharmacothera… (2024) | popPK | 6 | [10.1016/j.biopha.2024.116820](https://doi.org/10.1016/j.biopha.2024.116820) | [38810398](https://pubmed.ncbi.nlm.nih.gov/38810398) | The study includes bevacizumab as a subject drug in a human PK study, but reports only non-compartmental IP/IV exposure ratios rather than standard quantitative disposition parameters like CL, V, or t1/2 with specific values in the provided text. |
| `Rocchetti_2013.pdf` | Rocchetti M et al., Predictive pharmacokinetic-pharmacodyna…, Cancer chemotherapy and pha… (2013) | popPK | 5 | [10.1007/s00280-013-2107-z](https://doi.org/10.1007/s00280-013-2107-z) | [23430120](https://pubmed.ncbi.nlm.nih.gov/23430120) | The study is a preclinical PK-PD modeling analysis of bevacizumab in mice, but specific numeric disposition parameters (CL, V) are not explicitly listed in the provided evidence text. |

<sub>queue written 2026-10-14T18:21:11.481178+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2013 | irrelevant | 0 | 0 | This is an educational review discussing the need for neonatal clinical pharmacology; it mentions bevacizumab only as an example compound without reporting original quantitative PK parameters or extractable numeric values. |
| popPK | Del_2023 | relevant | 10 | 2 | The paper describes a population PK/PD model for bevacizumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Eskander_2015 | irrelevant | 0 | 0 | The paper is a clinical review discussing survival and pharmacodynamic modeling, not a pharmacokinetic study reporting quantitative disposition parameters for bevacizumab. |
| popPK | Ferl_2015 | irrelevant | 0 | 0 | This study analyzes dynamic contrast-enhanced MRI (DCE-MRI) data to model tumor vascular permeability (K(trans)) changes, not the pharmacokinetic parameters (CL, V, etc.) of the drug bevacizumab itself. |
| popPK | Huynh-Le_2019 | irrelevant | 0 | 0 | The study investigates amygdala atrophy after radiotherapy and only mentions bevacizumab as a covariate, reporting no pharmacokinetic parameters. |
| popPK | Park_2023 | irrelevant | 4 | 3 | The paper focuses on exposure-response (PD) modeling for efficacy (OS/PFS) rather than pharmacokinetic disposition parameters like clearance or volume, and while trough concentrations are reported, standard PK parameters are not the primary output. |
| popPK | Petitcollin_2021 | relevant | 10 | 1 | The paper describes a population PK model for bevacizumab and reports a qualitative half-life, but specific numeric parameter values (CL, V, Q) are not present in the text, likely residing in tables or supplementary data. |
| popPK | Peña-Cabia_2021 | irrelevant | 2 | 0 | The study is an exposure-response analysis of trough concentrations only and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Rietveld_2024 | relevant | 6 | 2 | The study includes bevacizumab as a subject drug in a human PK study, but reports only non-compartmental IP/IV exposure ratios rather than standard quantitative disposition parameters like CL, V, or t1/2 with specific values in the provided text. |
| popPK | Rietveld_2024_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for irinotecan and its metabolite SN-38, while bevacizumab is only listed as a co-administered agent. |
| popPK | Rocchetti_2013 | relevant | 5 | 0 | The study is a preclinical PK-PD modeling analysis of bevacizumab in mice, but specific numeric disposition parameters (CL, V) are not explicitly listed in the provided evidence text. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | The study evaluates a novel antibody (FD006) using bevacizumab only as a comparator for binding affinity and anti-angiogenic efficacy, with no pharmacokinetic parameter reporting for bevacizumab. |
| popPK | Xin_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of MNRP1685A, with bevacizumab serving only as a comparator or co-administered agent without specific PK parameters reported for bevacizumab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:21 UTC</sub>
