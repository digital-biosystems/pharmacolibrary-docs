<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;loxapine&quot;}]"></div>

# loxapine

- **generic name:** loxapine
- **ATC codes:** `N05AH01`
- **DrugBank:** [DB00408](https://go.drugbank.com/drugs/DB00408) · **PubChem:** [CID 3964](https://pubchem.ncbi.nlm.nih.gov/compound/3964)
- **molar mass:** 327.808 g/mol (C18H18ClN3O) — DrugBank
- **groups:** approved, investigational

## About

Loxapine is an antipsychotic used to treat schizophrenia and related psychotic conditions such as schizophreniform disorder. It remains in use, with an authorised product in the European Union, and is mainly used for schizophrenia and bipolar disorder.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q58614](https://www.wikidata.org/wiki/Q58614) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Biton_2012_Slack_Slo2_2_channel_activation](drugs/drug_loxapine/pd_Biton_2012_Slack_Slo2_2_channel_activation.md) | Slack (Slo2.2) channel activation ← loxapine · direct Emax (saturable) effect | — | Biton B et al., The antipsychotic drug loxapine is an o…, The Journal of pharmacology… (2012) | [10.1124/jpet.111.184622](https://doi.org/10.1124/jpet.111.184622) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:50 | 0:30 | 0/0/0 | 1/0/0 | 0/0/0 | 32,013/905 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dong_2017.pdf` | Dong M et al., Clinical Trial Simulations and Pharmaco…, Clinical pharmacokinetics (2017) | popPK | 8 | [10.1007/s40262-017-0512-x](https://doi.org/10.1007/s40262-017-0512-x) | [28205038](https://pubmed.ncbi.nlm.nih.gov/28205038) | A population PK model of inhaled loxapine (allometric scaling, trial simulation) is described, but no numeric parameter values (CL, V, ka) appear in the provided evidence, likely residing in tables/figures not included. |
| `Wong_2013.pdf` | Wong YC et al., Brain disposition and catalepsy after i…, Pharmaceutical research (2013) | popPK | 7 | [10.1007/s11095-013-1080-x](https://doi.org/10.1007/s11095-013-1080-x) | [23739987](https://pubmed.ncbi.nlm.nih.gov/23739987) | Rat PK/PD study of loxapine with quantitative measures (tmax ≤15 min, brain AUC0-240min), but full disposition parameters (CL, V) are not shown and may live in figures/tables not provided. |

<sub>queue written 2026-10-06T16:50:21.053674+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biton_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology/pharmacology study of loxapine as a channel opener; no PK disposition parameters reported. |
| popPK | Dong_2017 | relevant | 8 | 3 | A population PK model of inhaled loxapine (allometric scaling, trial simulation) is described, but no numeric parameter values (CL, V, ka) appear in the provided evidence, likely residing in tables/figures not included. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | Loxapine appears only as an antagonist in an in vitro vascular pharmacology study; no PK parameters for loxapine are reported. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | This is an in-vitro antibacterial study of loxapine derivatives against Salmonella in macrophage cell culture; no PK parameters for loxapine are reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | In-vitro pharmacology study of loxapine as a 5-HT receptor antagonist in rat jejunum; no PK parameters reported. |
| popPK | Wong_2013 | relevant | 7 | 4 | Rat PK/PD study of loxapine with quantitative measures (tmax ≤15 min, brain AUC0-240min), but full disposition parameters (CL, V) are not shown and may live in figures/tables not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
