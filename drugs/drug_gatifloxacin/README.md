<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;gatifloxacin&quot;}]"></div>

# gatifloxacin

- **generic name:** gatifloxacin
- **ATC codes:** `J01MA16`, `S01AE06`
- **DrugBank:** [DB01044](https://go.drugbank.com/drugs/DB01044) · **PubChem:** [CID 5379](https://pubchem.ncbi.nlm.nih.gov/compound/5379)
- **molar mass:** 375.3941 g/mol (C19H22FN3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Gatifloxacin is a fluoroquinolone antibiotic used against bacterial infections such as pneumonia, sinusitis, urinary tract infections, gonorrhea, and conjunctivitis. It has been withdrawn for systemic use because of serious side effects, though ophthalmic preparations may still be available in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2365016](https://www.wikidata.org/wiki/Q2365016) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:24 | 22:02 | 0/0/0 | 1/0/0 | 0/0/0 | 180,883/2,489 | einfracz / qwen3.8-27b | 18 | 3/13 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">in vitro</span> | [Tasso_2011_bactericidal_activity](drugs/drug_gatifloxacin/pd_Tasso_2011_bactericidal_activity.md) | bactericidal activity ← gatifloxacin · direct Emax (saturable) effect | — | Tasso L et al., Pharmacokinetic/pharmacodynamic modelli…, International journal of an… (2011) | [10.1016/j.ijantimicag.2011.05.015](https://doi.org/10.1016/j.ijantimicag.2011.05.015) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 197 matched, 91 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becnel_2009 | not_relevant | 1 | 5 | The study analyzes bacterial resistance and MICs of fluoroquinolones, not the effect of human genetic variants on drug pharmacokinetics or pharmacodynamics. |
| PGx | Garrison_2003 | not_relevant | 0 | 0 | The paper investigates bacterial genetic mutations (resistance mechanisms) and their effect on antibiotic efficacy, not human host pharmacogenomic variants affecting drug PK or PD parameters. |
| popPK | Kozai_2017 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper focuses on a framework for predicting CYP3A4-mediated drug interactions using AUC changes and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The paper studies the impact of fluoroquinolone resistance selection on the metabolic and susceptibility phenotypes of Clostridium perfringens, not human pharmacogenomics or PK/PD parameters of gatifloxacin. |
| PGx | Seifert_2019 | not_relevant | 0 | 0 | The paper investigates M. tuberculosis gyrA SNPs and their effect on drug susceptibility (MIC) and dosing, not human host pharmacogenomics (e.g., CYP450 variants) affecting gatifloxacin PK/PD. |
| PGx | Shams_2005 | not_relevant | 0 | 0 | The paper discusses general fluoroquinolone pharmacokinetics, resistance mechanisms, and clinical guidelines for lower respiratory tract infections, but does not report any pharmacogenomic effects or genotype-specific changes in PK/PD parameters for gatifloxacin. |
| PGx | Vanwert_2008 | not_relevant | 1 | 5 | The study investigates Oat3 knockout in mice and transporter inhibition, reporting no human genetic variants or pharmacogenomic effects for gatifloxacin. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The paper focuses on bacterial gene variants causing fluoroquinolone resistance, not on patient (host) pharmacogenomic effects on PK or PD parameters for gatifloxacin. |
| PGx | Zhang_2008 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition) of gatifloxacin and others, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
