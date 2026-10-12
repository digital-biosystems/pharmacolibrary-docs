<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;galsulfase&quot;}]"></div>

# galsulfase

- **generic name:** galsulfase
- **ATC codes:** `A16AB08`
- **DrugBank:** [DB01279](https://go.drugbank.com/drugs/DB01279) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Galsulfase is an enzyme replacement therapy used to treat mucopolysaccharidosis VI. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17400905](https://www.wikidata.org/wiki/Q17400905) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:37 | 1:37 | 0/0/0 | 0/0/0 | 0/0/0 | 26,305/3,746 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/2 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ruane_2016.pdf` | Ruane T et al., Pharmacodynamics, pharmacokinetics and…, Molecular genetics and meta… (2016) | popPK | 8 | [10.1016/j.ymgme.2015.10.006](https://doi.org/10.1016/j.ymgme.2015.10.006) | [26776148](https://pubmed.ncbi.nlm.nih.gov/26776148) | The study reports pharmacokinetic parameters (AUC, Cmax) for galsulfase in cats, but specific numeric values are not provided in the text, likely residing in figures or tables not included in the evidence. |

<sub>queue written 2026-10-05T10:36:44.929674+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auclair_2006 | irrelevant | 0 | 0 | The study focuses on the efficacy of intra-articular enzyme replacement therapy in cats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for galsulfase. |
| popPK | Auclair_2007 | irrelevant | 0 | 0 | The study is a preclinical efficacy/toxicology study in cats focusing on joint pathology and antibody titers, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a review of approved enzymes and their mechanisms/adverse effects, containing no quantitative pharmacokinetic parameters for galsulfase. |
| popPK | Brands_2013 | irrelevant | 0 | 0 | The paper focuses on genotype-phenotype correlations and antibody response to galsulfase, not on pharmacokinetic disposition parameters. |
| PD | Brands_2013 | not_relevant | 2 | 1 | The paper focuses on genotype-phenotype correlations and immunogenicity (antibody titers and in vitro inhibition), but does not report a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for galsulfase. |
| popPK | Harper_1993 | irrelevant | 0 | 0 | The paper describes in vitro lysosomal sulfate efflux and enzyme activity, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug galsulfase. |
| popPK | Jones_1998 | irrelevant | 2 | 0 | The study reports half-lives for rh4S (galsulfase) in rats but does not provide clearance, volume of distribution, or compartmental model parameters in the text. |
| popPK | Qi_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vestronidase alfa, not galsulfase. |
| popPK | Ruane_2016 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (AUC, Cmax) for galsulfase in cats, but specific numeric values are not provided in the text, likely residing in figures or tables not included in the evidence. |
| PD | Ruane_2016 | not_relevant | 2 | 1 | The study compares PK and PD outcomes between two infusion durations but reports no concentration-effect or dose-response modeling, nor any numeric PD parameters (e.g., Emax, EC50). |
| popPK | White_2008 | irrelevant | 0 | 0 | The paper describes in-vitro neutralizing antibody assays for galsulfase and does not report any pharmacokinetic disposition parameters. |
| PD | White_2008 | not_relevant | 0 | 0 | The paper describes the development and comparison of in vitro neutralizing antibody assays for galsulfase, but does not report any pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | White_2008_2 | irrelevant | 0 | 0 | The paper describes an immunoassay for measuring antibody response to galsulfase, not a pharmacokinetic study with disposition parameters. |
| popPK | unknown_2005 | irrelevant | 0 | 0 | The text is a regulatory and clinical trial overview that mentions pharmacokinetics were evaluated but provides no quantitative PK parameters (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
