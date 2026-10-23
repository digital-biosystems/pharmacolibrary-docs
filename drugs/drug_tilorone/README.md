<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tilorone&quot;}]"></div>

# tilorone

- **generic name:** tilorone
- **ATC codes:** `J05AX19`
- **DrugBank:** [DB17965](https://go.drugbank.com/drugs/DB17965) · **PubChem:** not captured
- **molar mass:** 410.558 g/mol (C25H34N2O3) — DrugBank
- **groups:** experimental

## About

Tilorone is an experimental compound studied as an antiviral and interferon-inducing agent, with additional anti-inflammatory and antineoplastic roles. It is not an approved medicine and remains experimental, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2028068](https://www.wikidata.org/wiki/Q2028068) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lüllmann-Rauch_1995_35S_GAG_storage](drugs/drug_tilorone/pd_L_llmann_Rauch_1995_35S_GAG_storage.md) | intracellular accumulation of 35S-GAGs ← tilorone · stimulation effect | — | Lüllmann-Rauch R et al., Tilorone-induced lysosomal storage of s…, Biochemical pharmacology (1995) | [10.1016/0006-2952(95)00042-x](https://doi.org/10.1016/0006-2952(95)00042-x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lüllmann-Rauch_1995_beta_hexosaminidase_release](drugs/drug_tilorone/pd_L_llmann_Rauch_1995_beta_hexosaminidase_release.md) | release of beta-hexosaminidase (enhanced secretion) ← tilorone · stimulation effect | — | Lüllmann-Rauch R et al., Tilorone-induced lysosomal storage of s…, Biochemical pharmacology (1995) | [10.1016/0006-2952(95)00042-x](https://doi.org/10.1016/0006-2952(95)00042-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:36 | 0:17 | 0/0/0 | 0/1/0 | 0/0/0 | 22,938/910 | ollama / glm-5.3-flash | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | This is an in vitro antiviral drug-screening/machine-learning study; tilorone is only a test compound with EC50 values, no PK disposition parameters. |
| popPK | Briggs_2008 | irrelevant | 0 | 0 | In vitro pharmacology study of receptor binding/activation; no PK disposition parameters for tilorone. |
| popPK | Hamburg_1978 | irrelevant | 0 | 0 | This is a macrophage phagocytosis/interferon-induction study in mice; tilorone is only a co-administered inducer with no PK disposition parameters reported. |
| popPK | Handrock_1992 | irrelevant | 0 | 0 | In-vitro cell culture study of lysosomal storage with tilorone only as a reference compound; no PK parameters reported. |
| popPK | Lüllmann-Rauch_1995 | irrelevant | 0 | 0 | In-vitro cell-culture mechanistic study of lysosomal storage with no PK disposition parameters for tilorone. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral drug screening study; tilorone is only one of 252 screened compounds with EC50 values, and no pharmacokinetic parameters (CL, V, ka, half-life, PK model) are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
