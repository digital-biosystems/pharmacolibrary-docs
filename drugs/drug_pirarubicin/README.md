<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;pirarubicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirarubicin_Robert1988_reference&quot;,&quot;label&quot;:&quot;Robert_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pirarubicin

- **generic name:** pirarubicin
- **ATC codes:** `L01DB08`
- **DrugBank:** [DB11616](https://go.drugbank.com/drugs/DB11616) · **PubChem:** [CID 11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583)
- **molar mass:** 627.643 g/mol (C32H37NO12) — DrugBank
- **groups:** investigational

## About

Pirarubicin is an anthracycline cytotoxic antibiotic investigated as an anticancer drug. It is not an approved medicine and remains investigational, with no authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76416926](https://www.wikidata.org/wiki/Q76416926) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pirarubicin (THP-ADM (pirarubicin)) | parent | 627.643 | C32H37NO12 | DrugBank | [11296583](https://pubchem.ncbi.nlm.nih.gov/compound/11296583) | Mader_1995, Robert_1988 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:45 | 3:41 | 1/1/0 | 0/0/1 | 0/0/0 | 33,631/10,393 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Robert_1988_reference](drugs/drug_pirarubicin/Pirarubicin_Robert1988_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Robert J et al., Pharmacokinetics and metabolism of pira…, European journal of cancer… (1988) | [10.1016/0277-5379(88)90217-9](https://doi.org/10.1016/0277-5379(88)90217-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mader_1995_reference](drugs/drug_pirarubicin/Pirarubicin_Mader1995_reference.md) | — | 1-compartment (no model) | 4 | Mader RM et al., Pharmacokinetics of 4'-O-tetrahydropyra…, Cancer chemotherapy and pha… (1995) | [10.1007/BF00685634](https://doi.org/10.1007/BF00685634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Leca_1998_WBCnadir](drugs/drug_pirarubicin/pd_Leca_1998_WBCnadir.md) | white blood cell nadir count ← pirarubicin · direct log-linear effect | model (no simulator) | Leca FR et al., Pharmacokinetic-pharmacodynamic relatio…, Anti-cancer drugs (1998) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mader_1995.pdf` | Mader RM et al., Pharmacokinetics of 4'-O-tetrahydropyra…, Cancer chemotherapy and pha… (1995) | popPK | 10 | [10.1007/BF00685634](https://doi.org/10.1007/BF00685634) | [7497603](https://pubmed.ncbi.nlm.nih.gov/7497603) | Human study reports a three-compartment model, half-lives, and clearance for pirarubicin with numeric values. |
| `Robert_1988.pdf` | Robert J et al., Pharmacokinetics and metabolism of pira…, European journal of cancer… (1988) | popPK | 10 | [10.1016/0277-5379(88)90217-9](https://doi.org/10.1016/0277-5379(88)90217-9) | [3181250](https://pubmed.ncbi.nlm.nih.gov/3181250) | Human two-compartment PK values, including clearance, volume, and half-lives, are reported in the evidence. |

<sub>queue written 2026-10-06T19:43:22.777841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kubota_2001 | not_relevant | 0 | 0 | The text discusses P-glycoprotein-mediated drug resistance but reports no gene variant/genotype effect on a pirarubicin PK or PD parameter. |
| popPK | Leca_1998 | irrelevant | 2 | 1 | Human exposure–toxicity analysis reports an AUC estimate but no quantitative disposition parameters. |
| PGx | Lin_2020 | not_relevant | 0 | 0 | The study reports drug resistance and GSPE effects in cell lines, not an effect of a gene variant, genotype, or phenotype on a pirarubicin PK/PD parameter. |
| popPK | Marbeuf-Gueye_1998 | irrelevant | 1 | 0 | This is an in-vitro cell-efflux study, and pirarubicin’s Ka is described only qualitatively without numeric values. |
| popPK | Meesungnoen_2002 | irrelevant | 0 | 0 | This is an in-vitro cellular efflux study, not a pharmacokinetic disposition study reporting pirarubicin PK parameters. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | WT1 genotype is associated with pathologic response to a combination regimen, but the paper reports no pirarubicin-specific PK or PD parameter. |
| PGx | Zhou_2018 | not_relevant | 0 | 0 | Genotypes were associated with tumor recurrence risk, but the paper reports no pharmacokinetic or pharmacodynamic parameter of pirarubicin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:43 UTC</sub>
