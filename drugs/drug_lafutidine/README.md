<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;lafutidine&quot;}]"></div>

# lafutidine

- **generic name:** lafutidine
- **ATC codes:** `A02BA08`
- **DrugBank:** [DB12770](https://go.drugbank.com/drugs/DB12770) · **PubChem:** [CID 5282136](https://pubchem.ncbi.nlm.nih.gov/compound/5282136)
- **molar mass:** 431.55 g/mol (C22H29N3O4S) — DrugBank
- **groups:** investigational

## About

Lafutidine is an H2-receptor antagonist developed as an anti-ulcer drug for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q582556](https://www.wikidata.org/wiki/Q582556) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ikawa_2007_DpH](drugs/drug_lafutidine/pd_Ikawa_2007_DpH.md) | DpH ← Lafutidine · direct sigmoid Emax (Hill) effect | — | Ikawa K et al., Pharmacokinetic and pharmacodynamic pro…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.1003](https://doi.org/10.1248/bpb.30.1003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 09:37 | 0:33 | 0/0/0 | 0/0/1 | 0/0/0 | 14,609/989 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dewan_2010.pdf` | Dewan B et al., An open-label, randomized, cross-over b…, World journal of gastrointe… (2010) | popPK | 8 | [10.4292/wjgpt.v1.i5.112](https://doi.org/10.4292/wjgpt.v1.i5.112) | [21577305](https://pubmed.ncbi.nlm.nih.gov/21577305) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2, tmax) for lafutidine in humans. |
| `Hagiwara_2007.pdf` | Hagiwara T et al., Improvement in symptoms after H2-recept…, World journal of gastroente… (2007) | pgx | 5 | [10.3748/wjg.v13.i28.3836](https://doi.org/10.3748/wjg.v13.i28.3836) | [17657838](https://www.ncbi.nlm.nih.gov/pubmed/17657838) | metadata signals extractable PGX data (CYP2C19) |
| `Shimatani_2003.pdf` | Shimatani T et al., Effect of omeprazole 10 mg on intragast…, Alimentary pharmacology & t… (2003) | pgx | 5 | [10.1046/j.1365-2036.2003.01804.x](https://doi.org/10.1046/j.1365-2036.2003.01804.x) | [14653835](https://www.ncbi.nlm.nih.gov/pubmed/14653835) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04T09:37:33.098483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hagiwara_2007 | not_relevant | 0 | 0 | The paper compares clinical outcomes of lafutidine vs lansoprazole and mentions CYP2C19 polymorphisms only to state that lafutidine's activity is unaffected, without reporting any pharmacogenomic data or PK/PD parameters. |
| popPK | Ikawa_2006 | irrelevant | 2 | 0 | The study focuses on the correlation between lafutidine AUC and peptide release, and while it mentions a one-compartmental PK analysis, no specific quantitative PK parameters (CL, V, ka, t1/2) are reported in the evidence. |
| PGx | Isomoto_2003 | not_relevant | 0 | 0 | The study reports that CYP2C19 genotype had no significant influence on the clinical outcome (H. pylori eradication rate), but it does not report specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pH levels) or quantitative effect sizes for the drug. |
| PGx | Shimatani_2003 | not_relevant | 0 | 0 | The paper reports that lafutidine's pharmacodynamic effect (acid suppression) was not influenced by CYP2C19 genotype, meaning no pharmacogenomic effect was observed for the drug in question. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
