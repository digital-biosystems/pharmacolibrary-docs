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
| 2026-10-06 23:50 | 0:36 | 3/0/0 | 0/0/0 | 0/0/0 | 57,203/3,475 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> | [Kovarik_1999_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.364). The first reading is what the record holds.">cross-check: partial</span> | [Kovarik_1999_2_reference](drugs/drug_basiliximab/Basiliximab_Kovarik1999v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span> | [Kovarik_2001_reference](drugs/drug_basiliximab/Basiliximab_Kovarik2001_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) |

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

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kovarik_1999.pdf` | Kovarik JM et al., Population pharmacokinetics and exposur…, Transplantation (1999) | popPK | 10 | [10.1097/00007890-199911150-00012](https://doi.org/10.1097/00007890-199911150-00012) | [10573065](https://pubmed.ncbi.nlm.nih.gov/10573065) | The abstract explicitly reports quantitative population PK parameters including clearance (36.7 ml/hr), volume of distribution (8.0 L), and half-life (7.4 days) for basiliximab in humans. |
| `Kovarik_1999_2.pdf` | Kovarik JM et al., Screening for basiliximab exposure-resp…, Clinical transplantation (1999) | popPK | 10 | [10.1034/j.1399-0012.1999.t01-2-130105.x](https://doi.org/10.1034/j.1399-0012.1999.t01-2-130105.x) | [10081632](https://pubmed.ncbi.nlm.nih.gov/10081632) | The paper explicitly reports population pharmacokinetic parameters (Vd, half-life, clearance) for basiliximab in humans. |
| `Kovarik_2001.pdf` | Kovarik JM et al., A population pharmacokinetic screen to…, Clinical pharmacology and t… (2001) | popPK | 10 | [10.1067/mcp.2001.114887](https://doi.org/10.1067/mcp.2001.114887) | [11309548](https://pubmed.ncbi.nlm.nih.gov/11309548) | The paper is a population pharmacokinetic study of basiliximab in humans, and it explicitly reports quantitative values for clearance, volume of distribution, and half-life in the abstract. |
| `Podichetty_2020.pdf` | Podichetty JT et al., Pharmacokinetics of Basiliximab for the…, Pharmacotherapy (2020) | popPK | 10 | [10.1002/phar.2347](https://doi.org/10.1002/phar.2347) | [31742732](https://pubmed.ncbi.nlm.nih.gov/31742732) | The study describes a population pharmacokinetic model for basiliximab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Mentré_1999.pdf` | Mentré F et al., Constructing a prediction interval for…, Journal of pharmacokinetics… (1999) | popPK | 8 | [10.1023/a:1020658023774](https://doi.org/10.1023/a:1020658023774) | [10567956](https://pubmed.ncbi.nlm.nih.gov/10567956) | The paper describes a population pharmacokinetic analysis for basiliximab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only reports derived prediction intervals for time to reach a threshold. |
| `Offner_2002.pdf` | Offner G et al., A multicenter, open-label, pharmacokine…, Transplantation (2002) | popPK | 5 | [10.1097/00007890-200210150-00010](https://doi.org/10.1097/00007890-200210150-00010) | [12394837](https://pubmed.ncbi.nlm.nih.gov/12394837) | The study is a pharmacokinetic and safety study in humans, but the provided text contains no quantitative PK parameter values (CL, V, t1/2). |

<sub>queue written 2026-10-06T23:49:42.783979+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hiramitsu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of everolimus, and basiliximab is only listed as a concomitant medication, with no PK parameters reported for it. |
| popPK | Lamba_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolic acid, and basiliximab is only mentioned as a co-administered induction agent. |
| popPK | Leber_2023 | irrelevant | 2 | 0 | The study reports negligible clearance for basiliximab and provides no quantitative PK parameters (CL, V) for it, as the modeling focus was on other drugs with measurable adsorption. |
| popPK | Mentré_1999 | relevant | 8 | 0 | The paper describes a population pharmacokinetic analysis for basiliximab, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only reports derived prediction intervals for time to reach a threshold. |
| popPK | Offner_2002 | relevant | 5 | 0 | The study is a pharmacokinetic and safety study in humans, but the provided text contains no quantitative PK parameter values (CL, V, t1/2). |
| popPK | Podichetty_2020 | relevant | 10 | 1 | The study describes a population pharmacokinetic model for basiliximab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Pyatt_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of belatacept, not basiliximab (which is only mentioned as a comparator induction agent). |
| popPK | Shihab_2014 | irrelevant | 0 | 0 | The paper is a review focusing on the pharmacokinetics of mTOR inhibitors (everolimus, sirolimus) and tacrolimus, with basiliximab mentioned only as a concomitant induction agent without any PK data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:49 UTC</sub>
