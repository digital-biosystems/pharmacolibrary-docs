<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;certolizumab pegol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CertolizumabPegol_Menshykau2024_reference&quot;,&quot;label&quot;:&quot;Menshykau_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/CertolizumabPegol_Menshykau2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CertolizumabPegol_Vande2017_reference&quot;,&quot;label&quot;:&quot;Vande_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/CertolizumabPegol_Vande2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CertolizumabPegol_Wade2015_reference&quot;,&quot;label&quot;:&quot;Wade_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_certolizumab_pegol/CertolizumabPegol_Wade2015_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# certolizumab pegol

- **generic name:** certolizumab pegol
- **ATC codes:** `L04AB05`
- **DrugBank:** [DB08904](https://go.drugbank.com/drugs/DB08904) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Certolizumab pegol is a TNF-alpha inhibitor used to treat inflammatory conditions such as rheumatoid arthritis, Crohn's disease, and ankylosing spondylitis. It is an approved medicine, authorised in the European Union, and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412909](https://www.wikidata.org/wiki/Q412909) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:15 | 3:02 | 3/0/0 | 0/0/1 | 0/0/0 | 173,591/10,949 | einfracz / qwen3.8-27b | 8 | 0/8 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.462). Primary extraction retained.">cross-check: disputed</span> | [Menshykau_2024_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Menshykau2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Menshykau D et al., Population PK modeling of certolizumab…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13220](https://doi.org/10.1002/psp4.13220) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.125). Primary extraction retained.">cross-check: partial</span> | [Vande_2017_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Vande2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Vande Casteele N et al., Accounting for Pharmacokinetic Variabil…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0535-3](https://doi.org/10.1007/s40262-017-0535-3) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.48). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Wade_2015_reference](drugs/drug_certolizumab_pegol/CertolizumabPegol_Wade2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+2 cov.) | Wade JR et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2015) | [10.1002/jcph.491](https://doi.org/10.1002/jcph.491) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lacroix_2014_ACR](drugs/drug_certolizumab_pegol/pd_Lacroix_2014_ACR.md) | ACR20, ACR50, and ACR70 Improvement Scores ← certolizumab_pegol · categorical (graded) response model | — | Lacroix BD et al., Simultaneous Exposure-Response Modeling…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.41](https://doi.org/10.1038/psp.2014.41) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=certolizumab_pegol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AKR1A1 (substrate), TNF (neutralizer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vande_2017.pdf` | Vande Casteele N et al., Accounting for Pharmacokinetic Variabil…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-017-0535-3](https://doi.org/10.1007/s40262-017-0535-3) | [28353055](https://pubmed.ncbi.nlm.nih.gov/28353055) | The study reports a population PK model for certolizumab pegol with specific quantitative parameters (CL/F, V/F, ka) explicitly stated in the results. |

<sub>queue written 2026-10-14T21:13:21.386532+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brekkan_2024 | relevant | 7 | 2 | The paper describes a population PK model for certolizumab pegol involving CL/F and V/F, but specific numeric parameter values are not explicitly provided in the text, likely residing in Table 3 or supplementary material which is not included. |
| popPK | Lacroix_2009 | irrelevant | 2 | 0 | The paper focuses on a pharmacodynamic exposure-response model (ACR20) rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for certolizumab pegol. |
| popPK | Lacroix_2014 | irrelevant | 1 | 0 | The paper is an exposure-response model of clinical efficacy (ACR scores) and does not report primary pharmacokinetic parameters (CL, V, etc.) for certolizumab pegol, only derived concentrations. |
| popPK | Lefevre_2022 | irrelevant | 4 | 2 | The study uses a pre-existing population PK model to predict clinical outcomes and reports derived clearance thresholds, but does not report the original PK parameter estimates (CL, V, Q, half-life) for certolizumab_pegol itself in the provided text. |
| popPK | Paul_2020 | irrelevant | 1 | 0 | The study reports an exposure-response relationship using plasma concentration cutoffs, but it does not report quantitative pharmacokinetic disposition parameters (such as clearance, volume of distribution, or half-life) or a compartmental PK model. |
| popPK | Steenholdt_2025 | irrelevant | 0 | 0 | This is a clinical outcome study on biologic sequencing; it does not report quantitative PK parameters (CL, V, t1/2) for certolizumab pegol, mentioning it only as a prior therapy for 3 patients. |
| popPK | Vande_2018 | relevant | 8 | 2 | The paper describes a population pharmacokinetic model and reports exposure-response data (AUC, concentrations) for certolizumab pegol, but specific PK parameter estimates (like mean CL or V) are referenced as being in a separate citation (ref 11) or not explicitly listed in the provided evidence. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports therapeutic efficacy and in vitro IC50/EC50 values, not population pharmacokinetic parameters (CL, V, etc.) for certolizumab pegol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:13 UTC</sub>
