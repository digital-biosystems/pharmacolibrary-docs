<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (pork)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet&quot;,&quot;label&quot;:&quot;Nosadini_1988_normal and insulin-dependent diabetic subjects&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_pork/InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;InsulinPork_Thorsteinsson1987_normal_and_type_i_diabetic_sub&quot;,&quot;label&quot;:&quot;Thorsteinsson_1987_normal and type I diabetic subjects&quot;,&quot;href&quot;:&quot;drugs/drug_insulin_pork/InsulinPork_Thorsteinsson1987_normal_and_type_i_diabetic_sub.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# insulin (pork)

- **generic name:** insulin (pork)
- **ATC codes:** `A10AB03`, `A10AC03`, `A10AD03`, `A10AE03`
- **DrugBank:** [DB00071](https://go.drugbank.com/drugs/DB00071)
- **groups:** approved

## About

**Description.** Insulin isolated from pig pancreas. Composed of alpha and beta chains, processed from pro-insulin. Forms a hexameric structure.

**Indication.** For the treatment of type I and II diabetes mellitus.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 15:20 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 16,935/1,572 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nosadini_1988_normal and insulin-dependent diabetic subjects](drugs/drug_insulin_pork/InsulinPork_Nosadini1988_normal_and_insulin_dependent_diabet.md) | Nosadini R et al., Porcine and human insulin absorption fr…, The Journal of clinical end… (1988) | [10.1210/jcem-67-3-551](https://doi.org/10.1210/jcem-67-3-551) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Thorsteinsson_1987_normal and type I diabetic subjects](drugs/drug_insulin_pork/InsulinPork_Thorsteinsson1987_normal_and_type_i_diabetic_sub.md) | Thorsteinsson B et al., Kinetics of human and porcine insulins…, European journal of clinica… (1987) | [10.1007/BF00544563](https://doi.org/10.1007/BF00544563) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_pork) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (unknown), INSR (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nosadini_1988.pdf` | Nosadini R et al., Porcine and human insulin absorption fr…, The Journal of clinical end… (1988) | popPK | 9 | [10.1210/jcem-67-3-551](https://doi.org/10.1210/jcem-67-3-551) | [3045144](https://pubmed.ncbi.nlm.nih.gov/3045144) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability) for porcine insulin in humans, with specific numeric values provided in the text. |
| `Suarez_2001.pdf` | Suarez S et al., Facilitation of pulmonary insulin absor…, Pharmaceutical research (2001) | popPK | 9 | [10.1023/a:1013362227548](https://doi.org/10.1023/a:1013362227548) | [11785686](https://pubmed.ncbi.nlm.nih.gov/11785686) | The study reports quantitative PK parameters (bioavailability, Cmax, half-life) for porcine insulin in rats, but specific compartmental values like CL and V are not explicitly listed in the provided text. |
| `Thorsteinsson_1987.pdf` | Thorsteinsson B et al., Kinetics of human and porcine insulins…, European journal of clinica… (1987) | popPK | 9 | [10.1007/BF00544563](https://doi.org/10.1007/BF00544563) | [3319643](https://pubmed.ncbi.nlm.nih.gov/3319643) | The study reports quantitative clearance parameters for porcine insulin in humans, with specific numeric values provided in the text. |
| `Fleeman_2009.pdf` | Fleeman LM et al., Pharmacokinetics and pharmacodynamics o…, The Veterinary record (2009) | popPK | 8 | [10.1136/vr.164.8.232](https://doi.org/10.1136/vr.164.8.232) | [19234324](https://pubmed.ncbi.nlm.nih.gov/19234324) | The study reports PK/PD data for porcine insulin in dogs, but the evidence only provides descriptive timing metrics (peaks, duration) rather than quantitative compartmental parameters like clearance or volume. |
| `Fritze_1988.pdf` | Fritze K et al., Intraindividual comparison of pharmacok…, Experimental and clinical e… (1988) | popPK | 8 | [10.1055/s-0029-1210818](https://doi.org/10.1055/s-0029-1210818) | [3075553](https://pubmed.ncbi.nlm.nih.gov/3075553) | The study reports pharmacokinetic parameters (time constant of elimination) for porcine insulin in dogs, but specific numeric values are not explicitly listed in the provided text evidence. |
| `Graham_1997.pdf` | Graham PA et al., Pharmacokinetics of a porcine insulin z…, The Journal of small animal… (1997) | popPK | 8 | [10.1111/j.1748-5827.1997.tb03435.x](https://doi.org/10.1111/j.1748-5827.1997.tb03435.x) | [9358402](https://pubmed.ncbi.nlm.nih.gov/9358402) | The study reports pharmacokinetic data for porcine insulin in dogs, but only provides descriptive time-to-peak and duration values rather than quantitative compartmental parameters like clearance or volume. |
| `Halban_1981.pdf` | Halban PA et al., Biologic activity and pharmacokinetics…, Diabetes care (1981) | popPK | 8 | [10.2337/diacare.4.2.238](https://doi.org/10.2337/diacare.4.2.238) | [7011735](https://pubmed.ncbi.nlm.nih.gov/7011735) | The study reports quantitative metabolic clearance rates (MCR) for pork insulin in rats, which are explicit numeric PK parameters for the subject drug. |
| `Shankar_1987.pdf` | Shankar TP et al., Insulin resistance and delayed clearanc…, The American journal of phy… (1987) | popPK | 8 | [10.1152/ajpendo.1987.252.6.E772](https://doi.org/10.1152/ajpendo.1987.252.6.E772) | [3296781](https://pubmed.ncbi.nlm.nih.gov/3296781) | The study reports quantitative clearance parameters (half-lives) for porcine insulin in an animal model (rat liver perfusion), and the specific numeric values are present in the abstract text. |

<sub>queue written 2026-09-14T15:19:54.456053+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bottermann_1982 | irrelevant | 2 | 0 | The study compares insulin preparations using a glucose clamp technique and reports qualitative differences in concentration and dextrose output, but does not provide quantitative pharmacokinetic parameters (CL, V, ka) for insulin_pork. |
| popPK | Ebihara_1983 | irrelevant | 2 | 0 | The study compares human and porcine insulin but reports only qualitative comparisons of AUC and bioavailability without providing specific quantitative PK parameters (CL, V, ka, t1/2) for insulin_pork. |
| popPK | Fleeman_2009 | relevant | 8 | 2 | The study reports PK/PD data for porcine insulin in dogs, but the evidence only provides descriptive timing metrics (peaks, duration) rather than quantitative compartmental parameters like clearance or volume. |
| popPK | Fritze_1988 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (time constant of elimination) for porcine insulin in dogs, but specific numeric values are not explicitly listed in the provided text evidence. |
| popPK | Graham_1997 | relevant | 8 | 2 | The study reports pharmacokinetic data for porcine insulin in dogs, but only provides descriptive time-to-peak and duration values rather than quantitative compartmental parameters like clearance or volume. |
| popPK | Heine_1987 | irrelevant | 2 | 0 | The study focuses on miscibility and time-action profiles using euglycaemic clamps rather than reporting quantitative compartmental PK parameters (CL, V, ka) for insulin_pork. |
| popPK | Kobayashi_1986 | irrelevant | 2 | 1 | The study focuses on a mutant insulin ([LeuB25]-insulin) with porcine insulin serving only as a comparator, and the provided evidence lacks specific quantitative PK parameters (CL, V) for the subject drug. |
| popPK | Owens_1984 | irrelevant | 2 | 0 | The study compares pharmacodynamic effects (glucose, IRI) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin_pork. |
| popPK | Suarez_2001 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, Cmax, half-life) for porcine insulin in rats, but specific compartmental values like CL and V are not explicitly listed in the provided text. |
| popPK | Uchman_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of procoagulant activity and does not report any pharmacokinetic parameters for insulin_pork. |
| PD | Uchman_1988 | not_relevant | 3 | 2 | The study reports a qualitative dose-response for beef insulin ICs and comparative PCA ratios for pork/human ICs, but lacks a formal PK/PD model, Emax/EC50 parameters, or a quantitative concentration-effect curve for pork insulin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-14 15:20 UTC</sub>
