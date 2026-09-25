<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tirofiban&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tirofiban_Emani2020_pediatric_patients_undergoing_aortopulmo&quot;,&quot;label&quot;:&quot;Emani_2020_pediatric patients undergoing aortopulmonary shunting&quot;,&quot;href&quot;:&quot;drugs/drug_tirofiban/Tirofiban_Emani2020_pediatric_patients_undergoing_aortopulmo.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tirofiban

- **generic name:** tirofiban
- **ATC codes:** `B01AC17`
- **DrugBank:** [DB00775](https://go.drugbank.com/drugs/DB00775)
- **groups:** approved, investigational

## About

**Description.** Tirofiban prevents the blood from clotting during episodes of chest pain or a heart attack, or while the patient is undergoing a procedure to treat a blocked coronary artery. It is a non-peptide reversible antagonist of the platelet glycoprotein (GP) IIb/IIIa receptor, and inhibits platelet aggregation.

**Indication.** For treatment, in combination with heparin, of acute coronary syndrome, including patients who are to be managed medically and those undergoing PTCA or atherectomy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 00:56 | 3:21 | 0/0/0 | 0/0/0 | 0/0/0 | 23,229/1,140 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Emani_2020_pediatric patients undergoing aortopulmonary shunting](drugs/drug_tirofiban/Tirofiban_Emani2020_pediatric_patients_undergoing_aortopulmo.md) | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tirofiban) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…of an administered dose appearing in urine and about 25% in feces, both largely as unchang…”</sub> | prose |
| excretion | kidney | <sub>“…It is cleared from the plasma largely by renal excretion, with about 65% of an administere…”</sub> | prose |

<sub>Actors without a tissue in the table: ITGA2B (target), ITGB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Emani_2020.pdf` | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | popPK | 9 | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) | [32168298](https://pubmed.ncbi.nlm.nih.gov/32168298) | The study reports quantitative PK parameters for tirofiban (half-life, steady-state concentration) and identifies covariates for clearance, but specific numeric values for clearance and volume are not explicitly listed in the provided text. |
| `Moriguchi_2005.pdf` | Moriguchi A et al., FK419, a novel nonpeptide GPIIb/IIIa an…, Journal of cerebral blood f… (2005) | pd | 4 | [10.1038/sj.jcbfm.9600009](https://doi.org/10.1038/sj.jcbfm.9600009) | [15678114](https://www.ncbi.nlm.nih.gov/pubmed/15678114) | metadata signals extractable PD data (IC50) |
| `Zhou_2020.pdf` | Zhou MC et al., Subacute stent thrombosis in a patient…, International journal of cl… (2020) | pgx | 5 | [10.5414/CP203547](https://doi.org/10.5414/CP203547) | [32352367](https://www.ncbi.nlm.nih.gov/pubmed/32352367) | metadata signals extractable PGX data (CYP2C19*2) |
| `Zhou_2024.pdf` | Zhou Y et al., Use of Tirofiban to Prevent Ischemic Ev…, Translational stroke resear… (2024) | pgx | 5 | [10.1007/s12975-023-01171-3](https://doi.org/10.1007/s12975-023-01171-3) | [37523134](https://www.ncbi.nlm.nih.gov/pubmed/37523134) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-06T06:53:51.926186+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on clopidogrel, not tirofiban. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The paper is a biophysical/mechanistic study of receptor binding and structure, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing platelet glycoprotein polymorphisms and drug response in general, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on tirofiban. |
| PGx | Meyer_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (complications) for antiplatelet therapies and does not report pharmacokinetic or pharmacodynamic parameters or specific gene-variant effects on tirofiban. |
| popPK | Moriguchi_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy comparison in an animal model and does not report pharmacokinetic disposition parameters for tirofiban. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping; tirofiban is only listed as a commercial product and is not the subject of any pharmacogenomic analysis. |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| popPK | Talreja_2004 | irrelevant | 0 | 0 | The study is an in-vitro platelet aggregometry experiment examining pharmacodynamic effects, not a pharmacokinetic study reporting disposition parameters for tirofiban. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic effects on clopidogrel and aspirin, but tirofiban is only mentioned as a rescue therapy without any analysis of its PK/PD parameters or genetic influence. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of stent thrombosis and mentions CYP2C19 genotype to justify switching from tirofiban to ticagrelor, but it does not report any pharmacokinetic or pharmacodynamic parameters of tirofiban or a pharmacogenomic effect on them. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel, not tirofiban. |
| PGx | Zhou_2024 | not_relevant | 2 | 5 | The study reports a clinical outcome (ischemic events) and platelet function (PD) for clopidogrel, but does not report a pharmacokinetic or pharmacodynamic parameter of tirofiban itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-06 00:55 UTC</sub>
