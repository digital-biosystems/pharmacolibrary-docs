<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;gemtuzumab ozogamicin&quot;}]"></div>

# gemtuzumab ozogamicin

- **generic name:** gemtuzumab ozogamicin
- **ATC codes:** `L01FX02`, `L01XC05`
- **DrugBank:** [DB00056](https://go.drugbank.com/drugs/DB00056) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Gemtuzumab ozogamicin is an antibody-drug conjugate used to treat acute myeloid leukemia. It is authorised in the European Union and carries a boxed warning, so its use is closely monitored.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412685](https://www.wikidata.org/wiki/Q412685) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:30 | 0:18 | 0/0/0 | 1/0/0 | 0/0/0 | 45,764/1,088 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Gómez-Castañeda_2022_CFC](drugs/drug_gemtuzumab_ozogamicin/pd_G_mez_Casta_eda_2022_CFC.md) | CFC ← gemtuzumab ozogamicin · direct linear effect | — | Gómez-Castañeda E et al., Tyrosine Kinase Inhibitor Independent G…, Cancers (2022) | [10.3390/cancers14215253](https://doi.org/10.3390/cancers14215253) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Gómez-Castañeda_2022_viability](drugs/drug_gemtuzumab_ozogamicin/pd_G_mez_Casta_eda_2022_viability.md) | viability ← gemtuzumab ozogamicin · direct Emax (saturable) effect | — | Gómez-Castañeda E et al., Tyrosine Kinase Inhibitor Independent G…, Cancers (2022) | [10.3390/cancers14215253](https://doi.org/10.3390/cancers14215253) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gemtuzumab_ozogamicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD33 (antibody), CD33 (regulator), FCGR1A (binder), FCGR3A (binder), FCGR3B (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hibma_2019.pdf` | Hibma J et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-018-0699-5](https://doi.org/10.1007/s40262-018-0699-5) | [30062662](https://pubmed.ncbi.nlm.nih.gov/30062662) | The abstract describes a population PK model for gemtuzumab ozogamicin but provides no specific numeric parameter values (such as clearance or volume) which are likely in the full text or tables not included in the evidence. |
| `Masters_2019.pdf` | Masters JC et al., Population Pharmacokinetics of Gemtuzum…, Clinical pharmacokinetics (2019) | popPK | 9 | [10.1007/s40262-018-0694-x](https://doi.org/10.1007/s40262-018-0694-x) | [30022367](https://pubmed.ncbi.nlm.nih.gov/30022367) | The paper describes a population pharmacokinetic model for gemtuzumab ozogamicin in pediatric patients, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-14T19:30:28.452763+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fostvedt_2019 | irrelevant | 4 | 1 | The paper focuses on pharmacodynamic and exposure-response modeling, and while it references a population PK model and provides specific EC50 values for myelosuppression, it does not provide the quantitative disposition parameters (CL, V, Q, ka) for gemtuzumab ozogamicin, which are likely in the referenced separate PK publications or supplementary material not fully detailed here. |
| popPK | Gómez-Castañeda_2022 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study using gemtuzumab-ozogamicin as a cytotoxic agent, reporting EC50 values for cell viability rather than pharmacokinetic disposition parameters (CL, Vd, etc.). |
| popPK | Hedrich_2018 | irrelevant | 0 | 0 | This is a review article that discusses ADCs in general and mentions gemtuzumab ozogamicin as an example, but it does not report original quantitative pharmacokinetic parameters or specific numeric values for the drug. |
| popPK | Hibma_2019 | relevant | 10 | 2 | The abstract describes a population PK model for gemtuzumab ozogamicin but provides no specific numeric parameter values (such as clearance or volume) which are likely in the full text or tables not included in the evidence. |
| popPK | Masters_2019 | relevant | 9 | 1 | The paper describes a population pharmacokinetic model for gemtuzumab ozogamicin in pediatric patients, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
