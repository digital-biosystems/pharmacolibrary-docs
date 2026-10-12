<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;prilocaine&quot;}]"></div>

# prilocaine

- **generic name:** prilocaine
- **ATC codes:** `N01BB04`
- **DrugBank:** [DB00750](https://go.drugbank.com/drugs/DB00750) · **PubChem:** [CID 4906](https://pubchem.ncbi.nlm.nih.gov/compound/4906)
- **molar mass:** 220.3107 g/mol (C13H20N2O) — DrugBank
- **groups:** approved, investigational

## About

Prilocaine is an amino amide local anesthetic used to prevent or relieve pain during procedures. It is an approved drug and is widely used in medical practice as a local anesthetic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413598](https://www.wikidata.org/wiki/Q413598) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prilocaine | parent | 220.311 | C13H20N2O | DrugBank | [4906](https://pubchem.ncbi.nlm.nih.gov/compound/4906) | Lauven_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:14 | 1:10 | 0/0/1 | 1/0/0 | 0/0/0 | 28,371/1,626 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lauven_1990_reference](drugs/drug_prilocaine/Prilocaine_Lauven1990_reference.md) | — | 1-compartment (no model) | 5 | Lauven PM et al., [The blood level and a pharmacokinetic…, Regional-Anaesthesie (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tiger_1995_veratrine_stimulated_phosphoinositide_breakdown](drugs/drug_prilocaine/pd_Tiger_1995_veratrine_stimulated_phosphoinositide_breakdown.md) | veratrine-stimulated phosphoinositide breakdown ← prilocaine · direct Emax (saturable) effect | — | Tiger G et al., Veratrine-stimulated phosphoinositide b…, Anesthesia and analgesia (1995) | [10.1097/00000539-199509000-00009](https://doi.org/10.1097/00000539-199509000-00009) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lauven_1990.pdf` | Lauven PM et al., [The blood level and a pharmacokinetic…, Regional-Anaesthesie (1990) | popPK | 10 | not captured | [2287764](https://pubmed.ncbi.nlm.nih.gov/2287764) | The abstract explicitly reports numeric values for the open two-compartment pharmacokinetic model (V1, Vdss, Cltot, half-lives, absorption half-life) for prilocaine in human patients. |

<sub>queue written 2026-10-07T04:14:02.778040+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cohen_1974 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of receptor binding interactions, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Higuchi_2013 | not_relevant | 1 | 2 | The study characterizes enzymes involved in metabolism and toxicity (methemoglobinemia) in vitro but does not report genetic variants or their effects on PK/PD parameters. |
| popPK | Metzler-Wilson_2013 | irrelevant | 0 | 0 | The study investigates the physiological effects of topical lidocaine/prilocaine on skin blood flow and sweating, not the systemic pharmacokinetic parameters (CL, V, etc.) of prilocaine. |
| popPK | Tiger_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring sodium channel blockade (IC50) and does not report pharmacokinetic disposition parameters. |
| PGx | Vale_2003 | not_relevant | 0 | 0 | The paper is a general review of racial differences in drug responses to various anesthetics and does not contain any specific data on the pharmacokinetics or pharmacodynamics of prilocaine. |
| PGx | Şimşek_2026 | not_relevant | 0 | 0 | The paper is a narrative review on perioperative management of dermatologic drugs and does not report any pharmacogenomic analysis or genotype-specific effects on prilocaine pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:14 UTC</sub>
