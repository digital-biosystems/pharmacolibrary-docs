<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) sestamibi&quot;}]"></div>

# technetium (99mTc) sestamibi

- **generic name:** technetium (99mTc) sestamibi
- **ATC codes:** `V09GA01`
- **DrugBank:** [DB09161](https://go.drugbank.com/drugs/DB09161) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Technetium (99mTc) sestamibi is a radiopharmaceutical used as a diagnostic imaging agent for the cardiovascular system. It is an approved diagnostic radiopharmaceutical, used in nuclear medicine imaging, and has also been studied investigationally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2917126](https://www.wikidata.org/wiki/Q2917126) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:01 | 2:44 | 0/1/0 | 0/0/0 | 0/0/0 | 39,952/8,987 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hsu_2017_reference](drugs/drug_technetium_99mtc_sestamibi/Technetium99mtcSestamibi_Hsu2017_reference.md) | — | 1-compartment (no model) | 0 | Hsu B et al., SPECT myocardial blood flow quantitatio…, European journal of nuclear… (2017) | [10.1007/s00259-016-3491-5](https://doi.org/10.1007/s00259-016-3491-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=technetium_99mtc_sestamibi) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bae_1997.pdf` | Bae KT et al., Pharmacokinetic modeling of multidrug r…, The quarterly journal of nu… (1997) | popPK | 8 | not captured | [9203849](https://pubmed.ncbi.nlm.nih.gov/9203849) | Sestamibi is included in a compartmental tracer-PK model, but no numeric parameter values are provided in the evidence. |
| `Hsu_2017.pdf` | Hsu B et al., SPECT myocardial blood flow quantitatio…, European journal of nuclear… (2017) | popPK | 7 | [10.1007/s00259-016-3491-5](https://doi.org/10.1007/s00259-016-3491-5) | [27585576](https://pubmed.ncbi.nlm.nih.gov/27585576) | MIBI is modeled using compartmental K1 and a numeric extraction-fraction equation, though no CL or volume values are reported. |
| `Beller_1991.pdf` | Beller GA et al., Physiological basis of myocardial perfu…, Seminars in nuclear medicine (1991) | pd | 5 | [10.1016/s0001-2998(05)80038-8](https://doi.org/10.1016/s0001-2998(05)80038-8) | [1835136](https://www.ncbi.nlm.nih.gov/pubmed/1835136) | metadata signals extractable PD data (Emax) |
| `McGoron_1997.pdf` | McGoron AJ et al., Extraction and retention of technetium-…, European journal of nuclear… (1997) | pd | 4 | [10.1007/s002590050177](https://doi.org/10.1007/s002590050177) | [9391182](https://www.ncbi.nlm.nih.gov/pubmed/9391182) | metadata signals extractable PD data (Emax) |
| `Michael_2006.pdf` | Michael M et al., Relationship of hepatic functional imag…, Journal of clinical oncolog… (2006) | pgx | 8 | [10.1200/JCO.2005.04.8496](https://doi.org/10.1200/JCO.2005.04.8496) | [16896007](https://www.ncbi.nlm.nih.gov/pubmed/16896007) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Harpstrite_2014.pdf` | Harpstrite SE et al., Interrogation of multidrug resistance (…, Nuclear medicine communicat… (2014) | pgx | 5 | [10.1097/MNM.0000000000000158](https://doi.org/10.1097/MNM.0000000000000158) | [25036383](https://www.ncbi.nlm.nih.gov/pubmed/25036383) | metadata signals extractable PGX data (ABCB1) |
| `MacKay_2012.pdf` | MacKay CS et al., Evaluation of the biliary and brain dis…, American journal of veterin… (2012) | pgx | 5 | [10.2460/ajvr.73.6.814](https://doi.org/10.2460/ajvr.73.6.814) | [22620695](https://www.ncbi.nlm.nih.gov/pubmed/22620695) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-07T20:01:03.249961+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bae_1997 | relevant | 8 | 0 | Sestamibi is included in a compartmental tracer-PK model, but no numeric parameter values are provided in the evidence. |
| popPK | Beller_1991 | irrelevant | 0 | 0 | This review reports no quantitative disposition parameters for sestamibi; the stated half-life is for teboroxime. |
| popPK | Chen_2000 | irrelevant | 0 | 0 | Technetium-99m sestamibi is only a comparator in cell transport studies; no disposition parameters for it are reported. |
| popPK | Fukushima_2011 | irrelevant | 2 | 9 | MIBI is used only as a perfusion comparator, though its numeric K1 and k2 values are reported in the evidence. |
| popPK | Guerraty_2021 | irrelevant | 2 | 8 | Numeric K1 and extraction-model values are reported, but sestamibi is used as a diagnostic imaging tracer rather than studied for drug disposition. |
| PGx | Harpstrite_2014 | not_relevant | 0 | 0 | Reports cellular sestamibi uptake versus P-glycoprotein expression/inhibition, but no gene variant, genotype, or phenotype effect on a PK/PD parameter. |
| popPK | Iida_1998 | irrelevant | 0 | 0 | The paper studies thallium-201, with sestamibi mentioned only as a comparator. |
| popPK | Iida_2008 | irrelevant | 0 | 0 | The study models 201Tl in canines; technetium-99m sestamibi is only mentioned as a comparator. |
| PGx | Kelly_2012 | not_relevant | 0 | 0 | The study reports the effect of CBT-1 treatment on technetium-99m sestamibi uptake, not an effect of a gene variant, genotype, or phenotype. |
| popPK | Klein_2014 | irrelevant | 1 | 1 | Reports myocardial blood-flow and reserve values, not quantitative pharmacokinetic disposition parameters for technetium-99m sestamibi. |
| PGx | MacKay_2012 | not_relevant | 0 | 0 | All dogs had the ABCB1 wildtype genotype; the study compared spinosad treatment, not a genetic effect on sestamibi parameters. |
| popPK | McGoron_1997 | irrelevant | 2 | 1 | Rat-heart extraction and retention are quantified, but no qualifying pharmacokinetic disposition parameters are reported. |
| PGx | Nayar_2022 | not_relevant | 0 | 0 | The paper discusses technetium-99m sestamibi imaging in Takotsubo syndrome but reports no gene variant, genotype, or phenotype effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Rao_1998 | irrelevant | 0 | 0 | This is an in-vitro study of Tc-TMPI, with sestamibi only as a transport substrate and no sestamibi PK parameters. |
| PGx | Rivero-García_2023 | not_relevant | 0 | 0 | CYP27B1 variants are discussed in relation to vitamin D metabolism; the sestamibi scan is only described diagnostically, with no variant-related PK or PD effect reported. |
| popPK | Wells_2014 | irrelevant | 1 | 0 | Sestamibi is used as a diagnostic perfusion tracer, and no numeric PK parameter values are provided. |
| popPK | Xi_2021 | irrelevant | 2 | 9 | Sestamibi is only a comparator, though numeric K1 values for it are reported. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The study quantifies myocardial blood flow for diagnostic imaging, not technetium-99m sestamibi pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 20:01 UTC</sub>
