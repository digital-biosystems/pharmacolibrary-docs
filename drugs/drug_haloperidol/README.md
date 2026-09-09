# haloperidol

- **generic name:** haloperidol
- **ATC codes:** `N05AD01`
- **DrugBank:** [DB00502](https://go.drugbank.com/drugs/DB00502)
- **groups:** approved, investigational

## About

**Description.** Haloperidol is a high potency first-generation (typical) antipsychotic and one of the most frequently used antipsychotic medications used worldwide.[A180616] While haloperidol has demonstrated pharmacologic activity at a number of receptors in the brain,[A27477] it exerts its antipsychotic effect through its strong antagonism of the dopamine receptor (mainly D2), particularly within the mesolimbic and mesocortical systems of the brain. Haloperidol is indicated for the treatment of the manifestations of several psychotic disorders including schizophrenia, acute psychosis, Tourette syndrome, and other severe behavioural states.[F4645] It is also used off-label for the management of chorea associated with Huntington's disease and for the treatment of intractable hiccups as it is a potent antiemetic. Dopamine-antagonizing medications such as haloperidol are though to improve psychotic symptoms and states that are caused by an over-production of dopamine, such as schizophrenia, which is theorized to be caused by a hyperdopaminergic state within the limbic system of the brain.[A34360]

Use of the first-generation antipsychotics (including haloperidol) is considered highly effective for the management of the "positive" symptoms of schizophrenia including hallucinations, hearing voices, aggression/hostility, disorganized speech, and psychomotor agitation. However, this class of drugs is also limited by the development of movement disorders induced by dopamine-blockade such as drug-induced parkinsonism, akathisia, dystonia, tardive dyskinesia, as well as other side effects including sedation, weight gain, and prolactin changes. While there are limited high-quality studies comparing haloperidol to lower-potency first-generation antipsychotics such as [DB00477], [DB01624], [DB00623], and [DB01403], haloperidol typically demonstrates the least amount of side effects within this class, but demonstrates a stronger disposition for causing extrapyramidal symptoms (EPS).[A180613,

**Indication.** Haloperidol is indicated for a number of conditions including for the treatment of schizophrenia, for the manifestations of psychotic disorders, for the control of tics and vocal utterances of Tourette’s Disorder in children and adults, for treatment of severe behavior problems in children of combative, explosive hyperexcitability (which cannot be accounted for by immediate provocation). Haloperidol is also indicated in the short-term treatment of hyperactive children who show excessive motor activity with accompanying conduct disorders consisting of some or all of the following symptoms: impulsivity, difficulty sustaining attention, aggressivity, mood lability, and poor frustration tolerance. Haloperidol should be reserved for these two groups of children only after failure to respond to psychotherapy or medications other than antipsychotics.[F4645]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/1 | 0/0/0 | 0/0/0 | not captured | not captured | 17 | 3/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2022](drugs/drug_haloperidol/Haloperidol_Li2022_reference.md) | Li L et al., Pharmacokinetics of Haloperidol in Crit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030549](https://doi.org/10.3390/pharmaceutics14030549) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pilla_2013](drugs/drug_haloperidol/Haloperidol_Pilla2013_reference.md) | Pilla (2013) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.4134)</sub><br><sub>route_to: `human_review`</sub> | [Franken_2017](drugs/drug_haloperidol/Haloperidol_Franken2017_reference.md) | Franken LG et al., Population pharmacokinetics of haloperi…, European journal of clinica… (2017) | [10.1007/s00228-017-2283-6](https://doi.org/10.1007/s00228-017-2283-6) |

## Coverage

- **PubMed hits:** 169 matched, 20 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yukawa_2002.pdf` | Yukawa E et al., Population pharmacokinetics of haloperi…, Clinical pharmacokinetics (2002) | popPK | 10 | [10.2165/00003088-200241020-00006](https://doi.org/10.2165/00003088-200241020-00006) | [11888334](https://pubmed.ncbi.nlm.nih.gov/11888334) | The study directly reports quantitative population pharmacokinetic parameters and model coefficients for haloperidol, with all numeric values clearly presented in the abstract and tables. |

<sub>queue written 2026-07-18T19:51:40.223020+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berk_2008 | irrelevant | 0 | 0 | The paper is a clinical efficacy analysis comparing smokers and non-smokers and does not report any pharmacokinetic parameters for haloperidol. |
| popPK | Gex-Fabry_2001 | irrelevant | 2 | 1 | This is a review article that references haloperidol clearance data from another study and an external figure, without providing original quantitative population pharmacokinetic parameters or complete numeric values. |
| popPK | Goikolea_2013 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis on depressive switch rates and contains no pharmacokinetic parameters or modeling for haloperidol. |
| popPK | Lako_2013 | irrelevant | 1 | 9 | The study models pharmacodynamic D2 receptor occupancy rather than reporting pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Oh-e_1991 | irrelevant | 0 | 0 | The provided evidence contains only document parsing metadata and no scientific text or numeric values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_haloperidol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
