<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dacomitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_estimate_rse&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dacomitinib_RuizGarcia2020_parameter_estimate&quot;,&quot;label&quot;:&quot;Ruiz-Garcia_2020_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_parameter_estimate.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dacomitinib

- **generic name:** dacomitinib
- **ATC codes:** `L01EB07`
- **DrugBank:** [DB11963](https://go.drugbank.com/drugs/DB11963) · **PubChem:** [CID 11511120](https://pubchem.ncbi.nlm.nih.gov/compound/11511120)
- **molar mass:** 469.939 g/mol (C24H25ClFN5O2) — DrugBank
- **groups:** approved, investigational

## About

Dacomitinib is an EGFR tyrosine kinase inhibitor used to treat non-small-cell lung cancer. It is authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17130597](https://www.wikidata.org/wiki/Q17130597) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dacomitinib | parent | 469.939 | C24H25ClFN5O2 | DrugBank | [11511120](https://pubchem.ncbi.nlm.nih.gov/compound/11511120) | Liu_2024, Ruiz-Garcia_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:21 | 3:47 | 2/3/0 | 0/0/0 | 0/0/0 | 97,953/19,551 | openai / gpt-6-luna | 6 | 0/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Ruiz-Garcia_2020_estimate_rse](drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_estimate_rse.md) | ▶ model + simulator | 1-compartment, oral | 8 | Ruiz-Garcia A et al., Pharmacokinetic Models to Characterize…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040330](https://doi.org/10.3390/pharmaceutics12040330) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Ruiz-Garcia_2020_parameter_estimate](drugs/drug_dacomitinib/Dacomitinib_RuizGarcia2020_parameter_estimate.md) | ▶ model + simulator | 1-compartment, oral | 7 | Ruiz-Garcia A et al., Pharmacokinetic Models to Characterize…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040330](https://doi.org/10.3390/pharmaceutics12040330) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2024_fasted_state](drugs/drug_dacomitinib/Dacomitinib_Liu2024_fasted_state.md) | — | 1-compartment (no model) | 4 | Liu J et al., Effects of H2-Receptor Antagonists on t…, Pharmaceutics (2024) | [10.3390/pharmaceutics16010118](https://doi.org/10.3390/pharmaceutics16010118) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2024_fed_state](drugs/drug_dacomitinib/Dacomitinib_Liu2024_fed_state.md) | — | 1-compartment (no model) | 4 | Liu J et al., Effects of H2-Receptor Antagonists on t…, Pharmaceutics (2024) | [10.3390/pharmaceutics16010118](https://doi.org/10.3390/pharmaceutics16010118) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2024_geometric_mean_ng_ml_geometric_cv](drugs/drug_dacomitinib/Dacomitinib_Liu2024_geometric_mean_ng_ml_geometric_cv.md) | — | 1-compartment (no model) | 1 | Liu J et al., Effects of H2-Receptor Antagonists on t…, Pharmaceutics (2024) | [10.3390/pharmaceutics16010118](https://doi.org/10.3390/pharmaceutics16010118) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dacomitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `SLC22A1` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: EGFR (inhibitor), ERBB2 (target), ERBB4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2021 | irrelevant | 2 | 0 | This is a clinical PPI exposure analysis, not a disposition-parameter study; trough values appear only in a figure not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:18 UTC</sub>
