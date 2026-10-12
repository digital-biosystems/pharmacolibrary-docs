<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;pantethine&quot;}]"></div>

# pantethine

- **generic name:** pantethine
- **ATC codes:** `A11HA32`
- **DrugBank:** [DB11190](https://go.drugbank.com/drugs/DB11190) · **PubChem:** [CID 452306](https://pubchem.ncbi.nlm.nih.gov/compound/452306)
- **molar mass:** 554.721 g/mol (C22H42N4O8S2) — DrugBank
- **groups:** approved

## About

Pantethine is a vitamin-like compound related to pantothenic acid that has been used as a dietary supplement and lipid-lowering agent. It is approved as a plain vitamin preparation and is available mainly as a supplement, not as a widely prescribed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q228762](https://www.wikidata.org/wiki/Q228762) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pantothenate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:07 | 2:52 | 0/1/0 | 0/0/0 | 0/0/0 | 61,471/2,895 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wittwer_1985_reference](drugs/drug_pantethine/Pantethine_Wittwer1985_reference.md) | — | 1-compartment (no model) | 0 | Wittwer CT et al., Metabolism of pantethine in cystinosis, The Journal of clinical inv… (1985) | [10.1172/JCI112152](https://doi.org/10.1172/JCI112152) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Arsenio_1987 | not_relevant | 1 | 0 | The paper reports qualitative clinical outcomes (reduction in lipids) after a fixed dose but provides no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| PD | Donati_1986 | not_relevant | 1 | 0 | The paper reports clinical efficacy (lipid changes) in a small cohort but provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| PD | Eto_1987 | not_relevant | 2 | 1 | The paper reports clinical outcomes (changes in beta-TG and lipids) for two fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Gentili_1985 | not_relevant | 1 | 0 | The text provides only a qualitative summary of pharmacological effects (e.g., "more durable reduction," "more pronounced activity") without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| PD | Ligas_1983 | not_relevant | 0 | 0 | The text is a brief summary of a clinical trial reporting qualitative therapeutic outcomes and safety, with no mention of pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters. |
| PD | Naruta_2001 | not_relevant | 1 | 0 | The paper reports qualitative effects of pantethine on lipid parameters in a mouse model but provides no concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of pantethine in PKAN patients, not the pharmacokinetic or pharmacodynamic effects of genetic variants on pantethine metabolism. |
| PGx | Rothmann_2013 | not_relevant | 0 | 0 | The paper investigates the metabolic flexibility of CoA biosynthesis in E. coli using a synthetic analog, not the pharmacogenomics of pantethine in humans. |
| PGx | van_2017 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of pantethine in an Alzheimer's disease model but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 08:04 UTC</sub>
