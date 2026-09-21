<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;fluoxetine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluoxetine_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fluoxetine/Fluoxetine_van2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# fluoxetine

- **generic name:** fluoxetine
- **ATC codes:** `N06AB03`, `N06CA03`
- **DrugBank:** [DB00472](https://go.drugbank.com/drugs/DB00472)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Fluoxetine is a 2nd generation antidepressant categorized as a selective serotonin reuptake inhibitor (SSRI).[A181673] It gained FDA approval in 1987 and although it was initially intended for the treatment of depression, today it is commonly prescribed to manage depression in addition to various other pathologies.[L7721]

**Indication.** Fluoxetine is indicated for both acute and maintenance treatment of major depressive disorder, obsessive compulsive disorder, and bulimia nervosa; however, it is only indicated for acute treatment of panic disorder independent of whether agoraphobia is present.[L7664] Fluoxetine may also be used in combination with olanzapine to treat depression related to Bipolar I Disorder, and treatment resistant depression.[L7664] Fluoxetine is additionally indicated for the treatment of female patients with premenstrual dysphoric disorder (PMDD).[L40833]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 18 | 1/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [van_2024_reference](drugs/drug_fluoxetine/Fluoxetine_van2024_reference.md) | van der Most MA et al., Toxicokinetics of the Antidepressant Fl…, Environmental science & tec… (2024) | [10.1021/acs.est.3c07744](https://doi.org/10.1021/acs.est.3c07744) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluoxetine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | brain | <sub>“…active metabolite, norfluoxetine, to be distributed to the brain.[L7721]…”</sub> | prose |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Fluoxetine is primarily eliminated in the urine.[L8468]…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA3 (target), CHRNB4 (target), CKS1B (inhibitor), CYP2B (inducer), HTR2C (target), KCNH2 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 178 matched, 20 returned
- **screened:** 1  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilens_2002.pdf` | Wilens TE et al., Fluoxetine pharmacokinetics in pediatri…, Journal of clinical psychop… (2002) | popPK | 10 | [10.1097/00004714-200212000-00006](https://doi.org/10.1097/00004714-200212000-00006) | [12454556](https://pubmed.ncbi.nlm.nih.gov/12454556) | The paper explicitly reports quantitative population pharmacokinetic parameters (CL/F, V/F, Ka, and variability estimates) for fluoxetine derived using NONMEM in pediatric patients. |

<sub>queue written 2026-07-18T04:27:44.128070+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burlot_2026 | irrelevant | not captured | not captured | The paper focuses entirely on the population pharmacokinetics of S65487 and contains no data or mention of fluoxetine. |
| popPK | Hai_2016 | irrelevant | not captured | not captured | Fluoxetine is used only as a pharmacological inhibitor to probe serotonin transport kinetics, and no quantitative PK parameters for fluoxetine are reported. |
| popPK | LLoyd_2025 | irrelevant | not captured | not captured | The paper reports only clinical efficacy and symptom trajectory data from a secondary analysis of an RCT, with no pharmacokinetic parameters or modeling for fluoxetine. |
| popPK | Nakagawa_2011 | irrelevant | not captured | not captured | The paper focuses exclusively on statistical methodologies in neuroscience and contains no mention of fluoxetine or pharmacokinetic parameters. |
| popPK | Vlase_2006 | irrelevant | not captured | not captured | The study exclusively reports pharmacokinetic parameters for metoclopramide, using fluoxetine only as a co-administered perpetrator drug in a drug-interaction trial. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fluoxetine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
