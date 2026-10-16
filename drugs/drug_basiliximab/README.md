<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;basiliximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Basiliximab_Kovarik1999_reference&quot;,&quot;label&quot;:&quot;Kovarik_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik1999_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Basiliximab_Kovarik1999v2_reference&quot;,&quot;label&quot;:&quot;Kovarik_1999_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik1999v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Basiliximab_Kovarik2001_reference&quot;,&quot;label&quot;:&quot;Kovarik_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_basiliximab/Basiliximab_Kovarik2001_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# basiliximab

- **generic name:** basiliximab
- **ATC codes:** `L04AC02`
- **DrugBank:** [DB00074](https://go.drugbank.com/drugs/DB00074) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Basiliximab is an immunosuppressive monoclonal antibody used to prevent graft rejection in kidney transplantation. It is authorised in the European Union and used in transplant medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418702](https://www.wikidata.org/wiki/Q418702) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:46 | 3:07 | 3/0/0 | 0/1/0 | 0/0/0 | 54,377/35,281 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Kovarik_1999_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span> | [Kovarik_1999_2_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> | [Kovarik_2001_reference](drugs/drug_basiliximab/Basiliximab_Kovarik2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Shihab_2014_renal_function](drugs/drug_basiliximab/pd_Shihab_2014_renal_function.md) | renal function · model not identified | — | Shihab F et al., Focus on mTOR inhibitors and tacrolimus…, Transplant immunology (2014) | [10.1016/j.trim.2014.05.002](https://doi.org/10.1016/j.trim.2014.05.002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=basiliximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL2RA (antibody), IL2RB (antibody).</sub>

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

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kovarik_1999.pdf` | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | popPK | 10 | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) | [10573065](https://pubmed.ncbi.nlm.nih.gov/10573065) | The paper is a population PK study of basiliximab in humans with all key numeric parameters (CL, V, t1/2) explicitly reported in the abstract. |
| `Kovarik_1999_2.pdf` | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | popPK | 10 | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) | [10081632](https://pubmed.ncbi.nlm.nih.gov/10081632) | The abstract explicitly reports the mean and standard deviation for basiliximab's distribution volume, half-life, and clearance in the study population. |
| `Kovarik_2001.pdf` | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | popPK | 10 | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) | [11309548](https://pubmed.ncbi.nlm.nih.gov/11309548) | The abstract explicitly reports quantitative population PK parameters (clearance, volume of distribution, half-life) for basiliximab in humans. |
| `Podichetty_2020.pdf` | Podichetty JT et al., Pharmacokinetics of Basiliximab for the…, Pharmacotherapy (2020) | popPK | 10 | [10.1002/phar.2347](https://doi.org/10.1002/phar.2347) | [31742732](https://pubmed.ncbi.nlm.nih.gov/31742732) | The paper describes a population pharmacokinetic analysis of basiliximab in humans, but the provided text contains no specific numeric parameter values (CL, V, etc.), only a description of the model structure. |
| `Mentré_1999.pdf` | Mentré F et al., Constructing a prediction interval for…, Journal of pharmacokinetics… (1999) | popPK | 8 | [10.1023/a:1020658023774](https://doi.org/10.1023/a:1020658023774) | [10567956](https://pubmed.ncbi.nlm.nih.gov/10567956) | The study describes a population PK model for basiliximab in humans to generate prediction intervals, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text. |

<sub>queue written 2026-10-15T00:43:34.858065+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hiramitsu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of everolimus, and basiliximab is only listed as a co-administered immunosuppressant without any reported PK parameters for it. |
| popPK | Lamba_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolic acid, with basiliximab only mentioned as a concomitant induction agent. |
| popPK | Leber_2023 | irrelevant | 0 | 0 | The study investigates the effect of hemoperfusion on basiliximab and concludes negligible clearance, without reporting standard disposition parameters (CL, V, half-life) or a PK model for basiliximab. |
| popPK | Mentré_1999 | relevant | 8 | 0 | The study describes a population PK model for basiliximab in humans to generate prediction intervals, but the specific numeric parameter estimates (CL, V, etc.) are not provided in the text. |
| popPK | Offner_2002 | irrelevant | 0 | 0 | The study focuses on safety, tolerability, and efficacy in pediatric transplant patients and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume) for basiliximab. |
| popPK | Podichetty_2020 | relevant | 10 | 0 | The paper describes a population pharmacokinetic analysis of basiliximab in humans, but the provided text contains no specific numeric parameter values (CL, V, etc.), only a description of the model structure. |
| popPK | Pyatt_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of belatacept, and basiliximab is only mentioned as a comparator induction agent. |
| popPK | Shihab_2014 | irrelevant | 0 | 0 | The paper is a review of mTOR inhibitors and tacrolimus, and basiliximab is only mentioned as an induction agent in a clinical regimen without any PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:46 UTC</sub>
