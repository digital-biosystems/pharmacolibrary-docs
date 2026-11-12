<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Succinylacetone&quot;}]"></div>

# Succinylacetone

- **generic name:** Succinylacetone
- **T3DB:** [T3D4471](http://www.t3db.ca/toxins/T3D4471) · **PubChem:** [CID 5312](https://pubchem.ncbi.nlm.nih.gov/compound/5312)

## About

Succinylacetone is a tyrosine metabolite It is a specific marker for Tyrosinemia type I. Type I tyrosinemia is an inherited metabolism disorder due to a shortage of the enzyme fumarylacetoacetate hydrolase that is needed to break down tyrosine. ..

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of succinylacetone are associated with Tyrosinemia Type I.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4471">T3DB T3D4471</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51568-18-4</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Fidler_1993_reference](drugs/toxin_succinylacetone/Succinylacetone_Fidler1993_reference.md) | — | 1-compartment (no model) | 0 | Fidler JM et al., Suppression of graft-versus-host diseas…, Transplantation (1993) | [10.1097/00007890-199302000-00026](https://doi.org/10.1097/00007890-199302000-00026) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 01:11 | 3:19 | 0/1/0 | 0/0/0 | 0/0/0 | 51,507/2,925 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fidler_1993.pdf` | Fidler JM et al., Suppression of graft-versus-host diseas…, Transplantation (1993) | popPK | 10 | [10.1097/00007890-199302000-00026](https://doi.org/10.1097/00007890-199302000-00026) | [8434389](https://pubmed.ncbi.nlm.nih.gov/8434389) | The paper reports specific quantitative pharmacokinetic parameters including multiple half-lives (7-18 min, 0.8-3 hr, 12 hr), systemic clearance trends, and subcutaneous bioavailability (82%) for succinylacetone. |

<sub>queue written 2026-11-11 01:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammini_2003 | irrelevant | 1 | 0 | The paper measures steady-state accumulation levels of succinylacetone in MAAI-KO mice but does not report any quantitative kinetic parameters (half-life, clearance, rate constants) for succinylacetone itself, focusing instead on DCA pharmacokinetics. |
| popPK | Bateman_2007 | irrelevant | 2 | 0 | The paper reports kinetic inhibition constants ($K_i$) for FAH inhibitors, not toxicokinetic parameters (half-life, clearance, etc.) for succinylacetone itself, which is only used as a biomarker. |
| PGx | Couce_2011 | not_relevant | 0 | 0 | The paper reports a genotype-phenotype correlation regarding clinical manifestations (nephrocalcinosis/hepatomegaly) of Tyrosinemia type 1, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of succinylacetone itself. |
| popPK | Guffon_2018 | irrelevant | 0 | 0 | The paper evaluates the pharmacokinetics and safety of nitisinone in patients with Hereditary Tyrosinemia Type 1, using succinylacetone only as a biomarker for efficacy (where levels were below the limit of quantification), and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance) for succinylacetone itself. |
| PGx | Kim_2000 | not_relevant | 0 | 0 | The paper describes the natural history and genotype of Tyrosinaemia I, not the pharmacogenomics of a drug treatment. |
| PGx | López-Mejía_2024 | not_relevant | 0 | 0 | The paper reports a genetic variant causing a metabolic disorder (congenital glucose-galactose malabsorption) and mentions succinylacetone levels only to rule out tyrosinemia; it does not report a pharmacogenomic effect on the PK or PD of succinylacetone as a drug. |
| PGx | Priestley_2020 | not_relevant | 0 | 0 | The paper is a clinical case report describing a missed diagnosis of Tyrosinemia Type I and does not report on the pharmacokinetics or pharmacodynamics of succinylacetone. |
| popPK | Spencer_1987 | irrelevant | 2 | 0 | The paper describes the effects of succinylacetone on renal transport mechanisms (clearance of other amino acids) but provides no quantitative kinetic parameters for succinylacetone's own disposition (e.g., half-life, clearance, or volume of distribution). |
| popPK | Tuchman_1987 | irrelevant | 2 | 0 | The study measures urinary excretion rates (mg/day) in human patients, which are dosimetric outcomes rather than physiological kinetic parameters (half-life, clearance, Vd) for the substance succinylacetone. |
| popPK | Wyss_1992 | irrelevant | 1 | 0 | The paper reports a single steady-state plasma concentration (3 mmol/l) achieved by dosing, but provides no kinetic parameters such as half-life, clearance, rate constants, or volume of distribution. |
| popPK | Wyss_1993 | irrelevant | 2 | 0 | The paper discusses the tissue distribution and retention of succinylacetone but only provides qualitative ratios (approx. 3:1) and percentage changes in enzyme activity, lacking specific quantitative kinetic parameters like half-life, rate constants, or volumes of distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsuccinylacetone%5D&body=Drug%3A%20succinylacetone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_succinylacetone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 01:11 UTC</sub>
