<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (pork)&quot;}]"></div>

# insulin (pork)

- **generic name:** insulin (pork)
- **ATC codes:** `A10AB03`, `A10AC03`, `A10AD03`, `A10AE03`
- **DrugBank:** [DB00071](https://go.drugbank.com/drugs/DB00071) · **PubChem:** not captured
- **groups:** approved

## About

Insulin of pork origin is an injectable insulin used to treat diabetes mellitus. It has been an approved medicine, though it has largely been replaced by human and analogue insulins in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801773](https://www.wikidata.org/wiki/Q20801773) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| insulin_pork | metabolite | 5777.6 | C256H381N65O76S6 | PubChem | [16131098](https://pubchem.ncbi.nlm.nih.gov/compound/16131098) | Thorsteinsson_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:37 | 2:23 | 0/0/1 | 0/0/0 | 0/0/0 | 28,378/4,299 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Thorsteinsson_1987_reference](drugs/drug_insulin_pork/InsulinPork_Thorsteinsson1987_reference.md) | — | 1-compartment (no model) | 1 | Thorsteinsson B et al., Kinetics of human and porcine insulins…, European journal of clinica… (1987) | [10.1007/BF00544563](https://doi.org/10.1007/BF00544563) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_pork) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (unknown), INSR (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 16 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nosadini_1988.pdf` | Nosadini R et al., Porcine and human insulin absorption fr…, The Journal of clinical end… (1988) | popPK | 10 | [10.1210/jcem-67-3-551](https://doi.org/10.1210/jcem-67-3-551) | [3045144](https://pubmed.ncbi.nlm.nih.gov/3045144) | The study reports quantitative pharmacokinetic parameters (clearance, bioavailability) for porcine insulin in human subjects. |
| `Fleeman_2009.pdf` | Fleeman LM et al., Pharmacokinetics and pharmacodynamics o…, The Veterinary record (2009) | popPK | 9 | [10.1136/vr.164.8.232](https://doi.org/10.1136/vr.164.8.232) | [19234324](https://pubmed.ncbi.nlm.nih.gov/19234324) | The study reports PK/PD of porcine insulin in dogs, but the evidence text only provides qualitative descriptions and time-to-peak/duration metrics, lacking specific numeric values for clearance, volume, or rate constants. |
| `Graham_1997.pdf` | Graham PA et al., Pharmacokinetics of a porcine insulin z…, The Journal of small animal… (1997) | popPK | 9 | [10.1111/j.1748-5827.1997.tb03435.x](https://doi.org/10.1111/j.1748-5827.1997.tb03435.x) | [9358402](https://pubmed.ncbi.nlm.nih.gov/9358402) | The study reports pharmacokinetic data for porcine insulin in dogs, including peak times and duration of action, but lacks explicit clearance or volume parameters. |
| `Halban_1981.pdf` | Halban PA et al., Biologic activity and pharmacokinetics…, Diabetes care (1981) | popPK | 9 | [10.2337/diacare.4.2.238](https://doi.org/10.2337/diacare.4.2.238) | [7011735](https://pubmed.ncbi.nlm.nih.gov/7011735) | The paper reports quantitative metabolic clearance rates (MCR) for pork insulin in rats, which are direct pharmacokinetic disposition parameters. |
| `Suarez_2001.pdf` | Suarez S et al., Facilitation of pulmonary insulin absor…, Pharmaceutical research (2001) | popPK | 9 | [10.1023/a:1013362227548](https://doi.org/10.1023/a:1013362227548) | [11785686](https://pubmed.ncbi.nlm.nih.gov/11785686) | The study reports quantitative PK parameters (bioavailability, Cmax, half-life) for porcine insulin in rats, but specific clearance or volume values are not explicitly listed in the provided text. |
| `Thorsteinsson_1987.pdf` | Thorsteinsson B et al., Kinetics of human and porcine insulins…, European journal of clinica… (1987) | popPK | 9 | [10.1007/BF00544563](https://doi.org/10.1007/BF00544563) | [3319643](https://pubmed.ncbi.nlm.nih.gov/3319643) | The study reports quantitative clearance parameters for porcine insulin in humans, with specific median values provided in the abstract. |
| `Ebihara_1983.pdf` | Ebihara A et al., Comparative clinical pharmacology of hu…, Diabetes care 6 Suppl (1983) | popPK | 8 | not captured | [6343032](https://pubmed.ncbi.nlm.nih.gov/6343032) | The study reports pharmacokinetic parameters (AUC, bioavailability) for porcine insulin in humans, but specific numeric values are not present in the provided text. |
| `Fritze_1988.pdf` | Fritze K et al., Intraindividual comparison of pharmacok…, Experimental and clinical e… (1988) | popPK | 8 | [10.1055/s-0029-1210818](https://doi.org/10.1055/s-0029-1210818) | [3075553](https://pubmed.ncbi.nlm.nih.gov/3075553) | The study reports pharmacokinetic parameters (time constant of elimination) for porcine insulin in dogs, but specific numeric values are not explicitly listed in the provided text. |
| `Kobayashi_1986.pdf` | Kobayashi M et al., Metabolism of a mutant insulin by a rec…, Diabetes research and clini… (1986) | popPK | 8 | [10.1016/s0168-8227(86)80001-8](https://doi.org/10.1016/s0168-8227(86)80001-8) | [3536368](https://pubmed.ncbi.nlm.nih.gov/3536368) | The study reports the half-life of porcine insulin in rats, which is a quantitative disposition parameter, although full compartmental parameters (CL, V) are not explicitly listed. |
| `Shankar_1987.pdf` | Shankar TP et al., Insulin resistance and delayed clearanc…, The American journal of phy… (1987) | popPK | 8 | [10.1152/ajpendo.1987.252.6.E772](https://doi.org/10.1152/ajpendo.1987.252.6.E772) | [3296781](https://pubmed.ncbi.nlm.nih.gov/3296781) | The study reports quantitative clearance and half-life parameters for porcine insulin in rat livers. |

<sub>queue written 2026-10-04T22:35:49.773809+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bottermann_1982 | irrelevant | 2 | 0 | The study reports qualitative comparisons of insulin concentrations and glucose clamp data but does not provide quantitative compartmental pharmacokinetic parameters (CL, V, ka) for insulin_pork. |
| popPK | Ebihara_1983 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (AUC, bioavailability) for porcine insulin in humans, but specific numeric values are not present in the provided text. |
| popPK | Fleeman_2009 | relevant | 9 | 2 | The study reports PK/PD of porcine insulin in dogs, but the evidence text only provides qualitative descriptions and time-to-peak/duration metrics, lacking specific numeric values for clearance, volume, or rate constants. |
| popPK | Fritze_1988 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (time constant of elimination) for porcine insulin in dogs, but specific numeric values are not explicitly listed in the provided text. |
| popPK | Graham_1997 | relevant | 9 | 4 | The study reports pharmacokinetic data for porcine insulin in dogs, including peak times and duration of action, but lacks explicit clearance or volume parameters. |
| popPK | Heine_1987 | irrelevant | 2 | 0 | The study focuses on miscibility and time-action profiles (pharmacodynamics) rather than reporting quantitative compartmental PK parameters (CL, V, ka) for insulin_pork. |
| popPK | Owens_1984 | irrelevant | 2 | 0 | The study compares pharmacodynamic effects (glucose, IRI) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for insulin_pork. |
| popPK | Suarez_2001 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, Cmax, half-life) for porcine insulin in rats, but specific clearance or volume values are not explicitly listed in the provided text. |
| popPK | Uchman_1988 | irrelevant | 0 | 0 | The study is an in-vitro immunological investigation of procoagulant activity, not a pharmacokinetic study, and reports no disposition parameters for insulin_pork. |
| PD | Uchman_1988 | not_relevant | 3 | 2 | The study reports a qualitative dose-response for beef insulin ICs and comparative PCA ratios for pork/human ICs, but lacks a formal PK/PD model, Emax/EC50 parameters, or a quantitative concentration-effect curve for pork insulin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 22:36 UTC</sub>
