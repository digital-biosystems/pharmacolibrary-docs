<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;ipriflavone&quot;}]"></div>

# ipriflavone

- **generic name:** ipriflavone
- **ATC codes:** `M05BX01`
- **DrugBank:** [DB13618](https://go.drugbank.com/drugs/DB13618) · **PubChem:** not captured
- **molar mass:** 280.3178 g/mol (C18H16O3) — DrugBank
- **groups:** investigational

## About

Ipriflavone, an isoflavone derivative, has been studied for the treatment of bone diseases such as osteoporosis. It remains an investigational drug and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1097778](https://www.wikidata.org/wiki/Q1097778) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ipriflavone | parent | 280.318 | C18H16O3 | DrugBank | — | Ma_1997 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Ma_1997_reference](drugs/drug_ipriflavone/Ipriflavone_Ma1997_reference.md) | — | 1-compartment (no model) | 3 | Ma XH et al., [High performance liquid chromatographi…, Yao xue xue bao = Acta phar… (1997) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:42 | 1:21 | 0/1/0 | 0/0/0 | 0/0/0 | 18,519/1,833 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_1999.pdf` | Li YP et al., Pharmacokinetics of intragastric iprifl…, Zhongguo yao li xue bao = A… (1999) | popPK | 10 | not captured | [11270971](https://pubmed.ncbi.nlm.nih.gov/11270971) | The paper reports quantitative pharmacokinetic parameters (Ka, Ke, Tmax, Cmax, AUC) for ipriflavone in rats, with all values explicitly listed in the evidence. |
| `Ma_1997.pdf` | Ma XH et al., [High performance liquid chromatographi…, Yao xue xue bao = Acta phar… (1997) | popPK | 10 | not captured | [11596332](https://pubmed.ncbi.nlm.nih.gov/11596332) | The abstract reports quantitative pharmacokinetic parameters (half-life, AUC, compartment model) for ipriflavone in humans, but lacks explicit values for clearance (CL) or volume (V). |
| `Rohatagi_1997.pdf` | Rohatagi S et al., Integrated pharmacokinetic and metaboli…, American journal of therape… (1997) | popPK | 8 | [10.1097/00045391-199705000-00005](https://doi.org/10.1097/00045391-199705000-00005) | [10423610](https://pubmed.ncbi.nlm.nih.gov/10423610) | The study reports a PK model for ipriflavone in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only fit statistics. |
| `Mohos_2018.pdf` | Mohos V et al., Interactions of casticin, ipriflavone,…, Biomedicine & pharmacothera… (2018) | pgx | 8 | [10.1016/j.biopha.2018.08.068](https://doi.org/10.1016/j.biopha.2018.08.068) | [30142539](https://www.ncbi.nlm.nih.gov/pubmed/30142539) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Chung_2006.pdf` | Chung HJ et al., Pharmacokinetic changes of ipriflavone…, Biopharmaceutics & drug dis… (2006) | pgx | 7 | [10.1002/bdd.515](https://doi.org/10.1002/bdd.515) | [16902944](https://www.ncbi.nlm.nih.gov/pubmed/16902944) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Chung_2008.pdf` | Chung HJ et al., Effects of water deprivation for 72 h o…, Research in veterinary scie… (2008) | pgx | 7 | [10.1016/j.rvsc.2007.08.010](https://doi.org/10.1016/j.rvsc.2007.08.010) | [17919668](https://www.ncbi.nlm.nih.gov/pubmed/17919668) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-07T03:42:12.872002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chung_2006 | not_relevant | 0 | 0 | The paper investigates the effect of acute renal failure (a physiological condition) on pharmacokinetics, not the effect of a genetic variant or genotype (pharmacogenomics). |
| PGx | Chung_2006_2 | not_relevant | 0 | 0 | The study investigates the effects of enzyme inducers/inhibitors on pharmacokinetics, not the influence of genetic variants (pharmacogenomics) on PK/PD parameters. |
| PGx | Chung_2008 | not_relevant | 0 | 0 | The study investigates the effects of water deprivation (dehydration) on ipriflavone pharmacokinetics, not the effects of a genetic variant or genotype. |
| PGx | Chung_2008_2 | not_relevant | 0 | 0 | The study examines the effects of an environmental factor (LPS-induced inflammation) on pharmacokinetics, not a genetic variant or genotype. |
| PGx | Chung_2009 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in a specific animal disease model (Nagase analbuminemic rats) due to hypoalbuminemia, not a human pharmacogenomic genetic variant affecting drug response. |
| popPK | Miyauchi_1996 | irrelevant | 0 | 0 | The paper is a mechanistic study on ipriflavone receptors and calcium signaling in osteoclasts, reporting no pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Mohos_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (polyphenols vs. CYP enzymes/albumin) and does not report any pharmacogenomic effects (gene variants) on the PK/PD of ipriflavone. |
| PGx | Monostory_1998 | not_relevant | 0 | 0 | The paper describes drug-drug interactions and in vitro inhibition but does not report any effect of genetic variants or genotypes on the pharmacokinetics or pharmacodynamics of ipriflavone. |
| PGx | Moon_2007 | not_relevant | 0 | 0 | The paper characterizes the enzymes responsible for ipriflavone metabolism but does not report genotype-specific changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rohatagi_1997 | relevant | 8 | 2 | The study reports a PK model for ipriflavone in humans, but specific numeric parameter values (CL, V, ka) are not listed in the provided text, only fit statistics. |
| PGx | Rohatagi_1997_2 | not_relevant | 0 | 0 | The study compares pharmacokinetics of different formulations (tablet vs. suspension) but does not report any gene variant or genotype effects on ipriflavone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:42 UTC</sub>
