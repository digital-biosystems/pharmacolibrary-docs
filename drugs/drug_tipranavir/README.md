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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:37 | 0:22 | 0/0/0 | 0/1/0 | 0/0/0 | 38,754/793 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peatey_2010_EC50](drugs/drug_tipranavir/pd_Peatey_2010_EC50.md) | Plasmodium falciparum asexual-stage parasite growth inhibition ← tipranavir · direct sigmoid Emax (Hill) effect | — | Peatey CL et al., Antimalarial asexual stage-specific and…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.01512-09](https://doi.org/10.1128/AAC.01512-09) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tipranavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inducer | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
