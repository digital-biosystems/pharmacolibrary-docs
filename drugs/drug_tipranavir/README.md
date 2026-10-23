<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tipranavir&quot;}]"></div>

# tipranavir

- **generic name:** tipranavir
- **ATC codes:** `J05AE09`
- **DrugBank:** [DB00932](https://go.drugbank.com/drugs/DB00932) · **PubChem:** [CID 54682461](https://pubchem.ncbi.nlm.nih.gov/compound/54682461)
- **molar mass:** 602.664 g/mol (C31H33F3N2O5S) — DrugBank
- **groups:** approved

## About

Tipranavir is a protease inhibitor antiviral used to treat HIV infection. It is an approved medicine authorised in the European Union for HIV, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423404](https://www.wikidata.org/wiki/Q423404) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peatey_2010_EC50](drugs/drug_tipranavir/pd_Peatey_2010_EC50.md) | Plasmodium falciparum asexual-stage parasite growth inhibition ← tipranavir · direct sigmoid Emax (Hill) effect | — | Peatey CL et al., Antimalarial asexual stage-specific and…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.01512-09](https://doi.org/10.1128/AAC.01512-09) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:37 | 0:22 | 0/0/0 | 0/1/0 | 0/0/0 | 38,754/793 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arshad_2020 | irrelevant | 2 | 1 | This is a SARS-CoV-2 drug repurposing prioritization paper; tipranavir is only one of many drugs compared via Cmax/EC50 ratios, with no population-PK disposition parameters (CL, V, ka) reported, and any PK values live in supplementary tables/figures not provided. |
| popPK | Koh_2010 | irrelevant | 0 | 0 | In vitro HIV resistance selection study; tipranavir only appears as a comparator with EC50 resistance data, no PK parameters. |
| popPK | McCallister_2004 | irrelevant | 4 | 2 | Only fold-increase in exposure is reported; no CL, V, or population-PK parameter values are given in the evidence. |
| popPK | Naeger_2007 | irrelevant | 0 | 0 | This is a virologic resistance analysis with no pharmacokinetic parameters for tipranavir reported. |
| popPK | Peatey_2010 | irrelevant | 0 | 0 | In-vitro antimalarial activity study (EC50s), not a PK study reporting disposition parameters for tipranavir. |
| popPK | Tojo_2010 | irrelevant | 0 | 0 | In-vitro antiviral drug-design study; tipranavir only appears as a comparator with no PK parameters. |
| popPK | Yedidi_2014 | irrelevant | 0 | 0 | This is a structural/antiviral activity study; tipranavir appears only as a comparator with EC50 values, no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
