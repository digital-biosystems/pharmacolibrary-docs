<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;alvimopan&quot;}]"></div>

# alvimopan

- **generic name:** alvimopan
- **ATC codes:** `A06AH02`
- **DrugBank:** [DB06274](https://go.drugbank.com/drugs/DB06274) · **PubChem:** [CID 5488548](https://pubchem.ncbi.nlm.nih.gov/compound/5488548)
- **molar mass:** 424.5326 g/mol (C25H32N2O4) — DrugBank
- **groups:** approved, investigational

## About

Alvimopan is a peripheral opioid receptor antagonist used to treat constipation, notably opioid-induced bowel dysfunction. It is an approved medicine, mainly used in the United States, and is not authorised in the European Union; it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4738021](https://www.wikidata.org/wiki/Q4738021) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:03 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 10,130/658 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alvimopan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foss_2008.pdf` | Foss JF et al., Pharmacokinetics of alvimopan and its m…, Clinical pharmacology and t… (2008) | popPK | 10 | [10.1038/sj.clpt.6100292](https://doi.org/10.1038/sj.clpt.6100292) | [17653140](https://pubmed.ncbi.nlm.nih.gov/17653140) | The paper describes a population PK model for alvimopan but the provided evidence contains only qualitative descriptions and percentage changes, with no specific numeric parameter values (CL, V, etc.) present. |
| `Schmith_2010.pdf` | Schmith VD et al., The effects of a short course of antibi…, Journal of clinical pharmac… (2010) | popPK | 8 | [10.1177/0091270009347474](https://doi.org/10.1177/0091270009347474) | [19797535](https://pubmed.ncbi.nlm.nih.gov/19797535) | The study reports pharmacokinetic parameters (Cmax, AUC) for alvimopan, but the evidence only provides percentage changes and metabolite reduction rates, lacking the absolute numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-04T15:03:18.282646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anantharamu_2015 | irrelevant | 0 | 0 | The paper is a review focused on naloxegol, and alvimopan is only mentioned as a comparator/early drug without providing specific quantitative PK parameters for it. |
| popPK | Armstrong_2013 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic comparison where alvimopan serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Armstrong_2013 | not_relevant | 1 | 0 | The text is an abstract describing qualitative efficacy comparisons in preclinical models without reporting specific numeric PD parameters (e.g., ED50, IC50) or concentration-effect curves for alvimopan. |
| popPK | Bream-Rouwenhorst_2009 | irrelevant | 2 | 0 | This is a clinical review article that discusses the efficacy and safety of alvimopan but does not report original quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |
| PD | Bream-Rouwenhorst_2009 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety outcomes without reporting specific pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Foss_2008 | relevant | 10 | 0 | The paper describes a population PK model for alvimopan but the provided evidence contains only qualitative descriptions and percentage changes, with no specific numeric parameter values (CL, V, etc.) present. |
| popPK | Holzer_2008 | irrelevant | 0 | 0 | The paper is a narrative review discussing the mechanism and clinical development of alvimopan, containing no original pharmacokinetic data or quantitative disposition parameters. |
| PD | Holzer_2008 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism and clinical development of alvimopan, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Holzer_2010 | irrelevant | 0 | 0 | This is a narrative review of opioid antagonists that discusses alvimopan's clinical use but does not report any quantitative pharmacokinetic parameters or models. |
| popPK | Kraft_2008 | irrelevant | 0 | 0 | The paper is a review of methylnaltrexone for postoperative ileus and mentions alvimopan only as an approved comparator, providing no pharmacokinetic parameters for alvimopan. |
| PD | Kraft_2008 | not_relevant | 0 | 0 | The text is a review of methylnaltrexone and only mentions alvimopan's approval without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Leslie_2005 | irrelevant | 2 | 0 | This is a narrative review of alvimopan's clinical efficacy and safety, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2). |
| PD | Leslie_2005 | not_relevant | 1 | 0 | The text is a review article summarizing clinical efficacy and safety without providing specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response data. |
| popPK | Mousavi_2023 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapy for opioid-induced bowel dysfunction and does not report original quantitative pharmacokinetic parameters for alvimopan. |
| popPK | Neary_2005 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and safety, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for alvimopan. |
| popPK | Power_2011 | irrelevant | 0 | 0 | The paper is a general review of analgesics that mentions alvimopan only as a clinical example without providing any pharmacokinetic data or quantitative disposition parameters. |
| PD | Power_2011 | not_relevant | 1 | 0 | The text is a general review article that mentions alvimopan qualitatively but provides no numeric PD parameters, concentration-effect data, or dose-response analysis. |
| popPK | Schmith_2010 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (Cmax, AUC) for alvimopan, but the evidence only provides percentage changes and metabolite reduction rates, lacking the absolute numeric values for clearance, volume, or half-life. |
| popPK | Tan_2007 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy endpoints (GI function, time to discharge) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for alvimopan. |
| popPK | Webster_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for opioid-induced bowel dysfunction and does not report any pharmacokinetic parameters for alvimopan. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tramadol and its metabolite, using alvimopan only as a receptor antagonist probe, and reports no pharmacokinetic parameters for alvimopan. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper investigates the anti-cancer efficacy of tramadol and its metabolite O-desmethyltramadol, using alvimopan only as a mechanistic antagonist to rule out opioid receptor involvement; it does not report a pharmacodynamic or exposure-response relationship for alvimopan itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
