<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03X&quot;,&quot;href&quot;:&quot;atc/G03X.md&quot;},{&quot;label&quot;:&quot;ospemifene&quot;}]"></div>

# ospemifene

- **generic name:** ospemifene
- **ATC codes:** `G03XC05`
- **DrugBank:** [DB04938](https://go.drugbank.com/drugs/DB04938) · **PubChem:** [CID 3036505](https://pubchem.ncbi.nlm.nih.gov/compound/3036505)
- **molar mass:** 378.891 g/mol (C24H23ClO2) — DrugBank
- **groups:** approved

## About

Ospemifene is a selective estrogen receptor modulator used to treat dyspareunia (painful intercourse) in postmenopausal women. It is an approved medicine with one product authorised in the European Union, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7107372](https://www.wikidata.org/wiki/Q7107372) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ospemifene | parent | 378.891 | C24H23ClO2 | DrugBank | [3036505](https://pubchem.ncbi.nlm.nih.gov/compound/3036505) | Kubota_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:28 | 0:25 | 0/0/1 | 0/0/0 | 0/0/0 | 14,092/1,008 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Kubota_2017_reference](drugs/drug_ospemifene/Ospemifene_Kubota2017_reference.md) | held back | 1-compartment, oral | 5 | Kubota R et al., Population pharmacokinetics of ospemife…, International journal of cl… (2017) | [10.5414/CP202821](https://doi.org/10.5414/CP202821) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ospemifene).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kubota_2017.pdf` | Kubota R et al., Population pharmacokinetics of ospemife…, International journal of cl… (2017) | popPK | 10 | [10.5414/CP202821](https://doi.org/10.5414/CP202821) | [28128722](https://pubmed.ncbi.nlm.nih.gov/28128722) | The paper is a population PK study for ospemifene in humans and explicitly provides the final model parameter estimates (CL/F, V2/F, Q/F, V3/F, ka) in the results section. |
| `Lehtinen_2013.pdf` | Lehtinen T et al., Effects of cytochrome P450 inhibitors a…, Biopharmaceutics & drug dis… (2013) | pgx | 7 | [10.1002/bdd.1853](https://doi.org/10.1002/bdd.1853) | [23852652](https://www.ncbi.nlm.nih.gov/pubmed/23852652) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tolonen_2013.pdf` | Tolonen A et al., Ospemifene metabolism in humans in vitr…, Drug metabolism and drug in… (2013) | pgx | 7 | [10.1515/dmdi-2013-0016](https://doi.org/10.1515/dmdi-2013-0016) | [23729558](https://www.ncbi.nlm.nih.gov/pubmed/23729558) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-07T09:28:38.227463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Lehtinen_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with CYP modulators (phenotypic effects), not the impact of specific gene variants or genotypes on ospemifene pharmacokinetics. |
| PGx | Tolonen_2013 | not_relevant | 2 | 0 | The paper describes the metabolic pathways and CYP enzyme involvement for ospemifene but does not report any pharmacogenomic study linking specific gene variants/genotypes to changes in PK/PD parameters. |
| PGx | Turpeinen_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (effect of ospemifene on other drugs) and general CYP enzyme activity, but it does not report on genetic variants or pharmacogenomic factors affecting ospemifene pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:28 UTC</sub>
