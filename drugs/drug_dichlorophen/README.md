<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02D&quot;,&quot;href&quot;:&quot;atc/P02D.md&quot;},{&quot;label&quot;:&quot;dichlorophen&quot;}]"></div>

# dichlorophen

- **generic name:** dichlorophen
- **ATC codes:** `P02DX02`
- **DrugBank:** [DB11396](https://go.drugbank.com/drugs/DB11396) · **PubChem:** not captured
- **molar mass:** 269.12 g/mol (C13H10Cl2O2) — DrugBank
- **groups:** investigational, vet_approved

## About

Dichlorophen is an anticestodal drug used to treat tapeworm infections, and it also has antifungal and antiprotozoal activity. It is approved for veterinary use, while human use remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q377552](https://www.wikidata.org/wiki/Q377552) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Aggarwal_2020_NAPE_PLD_activity](drugs/drug_dichlorophen/pd_Aggarwal_2020_NAPE_PLD_activity.md) | Recombinant mouse Nape-pld activity (normalized % activity, PED-A1 hydrolysis) ← dichlorophen (Inh 17) · direct sigmoid Emax (Hill) effect | — | Aggarwal G et al., Symmetrically substituted dichlorophene…, The Journal of biological c… (2020) | [10.1074/jbc.RA120.013362](https://doi.org/10.1074/jbc.RA120.013362) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:51 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 24,745/532 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2020 | irrelevant | 0 | 0 | In vitro enzyme-inhibition screening study; dichlorophen is only one of many tested analogs, with no PK/disposition parameters reported. |
| popPK | Matuszek_1998 | irrelevant | 0 | 0 | Dichlorophen appears only as part of a chemical name (dichlorophenyl) in an antagonist; no PK parameters for dichlorophen. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | In-vitro enzyme inhibition study of 11β-HSD2; dichlorophen is only an inhibitor tested, with no PK disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
