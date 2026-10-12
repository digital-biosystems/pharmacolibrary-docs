<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;dibekacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dibekacin_Arancibia1995_reference&quot;,&quot;label&quot;:&quot;Arancibia_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dibekacin

- **generic name:** dibekacin
- **ATC codes:** `J01GB09`, `S01AA29`
- **DrugBank:** [DB13270](https://go.drugbank.com/drugs/DB13270) · **PubChem:** not captured
- **molar mass:** 451.521 g/mol (C18H37N5O8) — DrugBank
- **groups:** approved

## About

Dibekacin is an aminoglycoside antibiotic, related to kanamycin, used to treat bacterial infections. It is an approved medicine and is used mainly in Japan and some other Asian countries, given by injection or as eye drops.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3706873](https://www.wikidata.org/wiki/Q3706873) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dibekacin | parent | 451.521 | C18H37N5O8 | DrugBank | — | Arancibia_1987, Arancibia_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:29 | 0:39 | 1/1/1 | 0/0/0 | 0/0/0 | 38,307/3,928 | einfracz / qwen3.8-27b | 6 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span> | [Arancibia_1995_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arancibia_1987_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1987_reference.md) | — | 1-compartment (no model) | 3 | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Campillo_1980_reference](drugs/drug_dibekacin/Dibekacin_Campillo1980_reference.md) | — | 1-compartment (no model) | 0 | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arancibia_1987.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | popPK | 10 | not captured | [3557728](https://pubmed.ncbi.nlm.nih.gov/3557728) | The abstract explicitly reports quantitative two-compartment PK parameters including clearance, half-life, and rate constants for dibekacin in humans, though specific volume values are not listed. |
| `Arancibia_1995.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | popPK | 10 | not captured | [8688988](https://pubmed.ncbi.nlm.nih.gov/8688988) | The text explicitly reports quantitative PK parameters (Cl, Vd, t1/2, k10) for dibekacin in humans, including values for normal and anephric subjects. |
| `Campillo_1980.pdf` | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | popPK | 9 | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) | [7439256](https://pubmed.ncbi.nlm.nih.gov/7439256) | The study reports PK parameters for dibekacin in humans, but specific numeric values for clearance and volume are not explicitly listed in the text (only half-life is provided), suggesting the full parameter set is in the main text/tables not fully reproduced here. |
| `Motohiro_1985.pdf` | Motohiro T et al., [Fundamental and clinical studies on in…, The Japanese journal of ant… (1985) | popPK | 7 | not captured | [4079001](https://pubmed.ncbi.nlm.nih.gov/4079001) | The study reports AUC and half-life values for dibekacin in humans, but specific clearance (CL) and volume (V) parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T11:29:18.962354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study is in-vitro (MICs) and PK/PD index calculation only, not an in-vivo PK study reporting clearance/volume/half-life for dibekacin. |
| popPK | Tanigawara_2006_2 | irrelevant | 2 | 2 | The study reports population pharmacokinetic parameters for arbekacin, which is a derivative of dibekacin, not dibekacin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:29 UTC</sub>
