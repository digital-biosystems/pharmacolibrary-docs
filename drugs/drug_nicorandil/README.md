<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;nicorandil&quot;}]"></div>

# nicorandil

- **generic name:** nicorandil
- **ATC codes:** `C01DX16`
- **DrugBank:** [DB09220](https://go.drugbank.com/drugs/DB09220) · **PubChem:** [CID 47528](https://pubchem.ncbi.nlm.nih.gov/compound/47528)
- **molar mass:** 211.177 g/mol (C8H9N3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nicorandil is a vasodilator heart medicine used to treat angina (chest pain caused by reduced blood flow to the heart). It is not authorised in the European Union but remains in clinical use in some countries, where it is prescribed for cardiac patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q862989](https://www.wikidata.org/wiki/Q862989) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicorandil | parent | 211.177 | C8H9N3O4 | DrugBank | [47528](https://pubchem.ncbi.nlm.nih.gov/compound/47528) | Iida_2008_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub> | [Iida_2008_obj](drugs/drug_nicorandil/Nicorandil_Iida2008_obj.md) | — | 1-compartment (no model) | 2 | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |
| <span class="pk-rf" hidden data-species="unknown" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub> | [↳ sig](drugs/drug_nicorandil/Nicorandil_Iida2008_sig.md) | — | 1-compartment (no model) | 2 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Iida_2008_2_reference](drugs/drug_nicorandil/Nicorandil_Iida2008v2_reference.md) | — | 1-compartment (no model) | 2 | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Iida_2008_2_PAWP](drugs/drug_nicorandil/pd_Iida_2008_2_PAWP.md) | pulmonary artery wedge pressure ← nicorandil · direct Emax (saturable) effect | — | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Shindo_1998_whole_cell_SUR_2B_Kir6_2_channel_current](drugs/drug_nicorandil/pd_Shindo_1998_whole_cell_SUR_2B_Kir6_2_channel_current.md) | the response · model not identified | — | Shindo T et al., SUR2 subtype (A and B)-dependent differ…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701927](https://doi.org/10.1038/sj.bjp.0701927) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=nicorandil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCC9 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:07 | 8:53 | 3/0/0 | 2/0/0 | 0/0/0 | 199,360/20,581 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 16/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 12 returned
- **screened:** 16  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bachert_1993 | irrelevant |  |  | no extractable full text |
| popPK | Bedair_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (antinociception, liver fibrosis markers) and does not report pharmacokinetic parameters for nicorandil. |
| popPK | Belz_1992 | irrelevant |  |  | no extractable full text |
| popPK | Fujiwara_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms and membrane potential, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Funatogawa_2007 | irrelevant | 2 | 0 | The paper proposes a statistical method for estimating half-life from single-point data and uses nicorandil data only as an illustrative example, without reporting specific quantitative PK parameter values in the provided evidence. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator potency and tolerance in isolated bovine coronary arteries, reporting no pharmacokinetic parameters. |
| popPK | Ishibashi_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of structure-activity relationships in isolated rabbit aorta, reporting no pharmacokinetic parameters. |
| popPK | Maekawa_1997 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel K+ channel openers, and nicorandil is only used as a comparator for vasorelaxant activity and coronary blood flow duration, with no pharmacokinetic parameter modeling or quantitative disposition data reported. |
| PD | Maekawa_1997 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding nicorandil or pharmacodynamics. |
| popPK | Satoh_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxant mechanisms in isolated porcine arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Shindo_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of K+ channel activation by nicorandil, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator potency (EC50) in rat pulmonary arteries, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wei_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicorandil's effect on ion channels in guinea pig myocytes and does not report pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 10:59 UTC</sub>
