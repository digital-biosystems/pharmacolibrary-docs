<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;peginterferon alfa-2a&quot;}]"></div>

# peginterferon alfa-2a

- **generic name:** peginterferon alfa-2a
- **ATC codes:** `L03AB11`
- **DrugBank:** [DB00008](https://go.drugbank.com/drugs/DB00008) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Peginterferon alfa-2a is an antiviral, immune-stimulating medicine used to treat chronic hepatitis B and C and certain blood disorders such as polycythemia vera and essential thrombocythemia. It is authorised in the European Union and is included on the WHO list of essential medicines, so it remains in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420056](https://www.wikidata.org/wiki/Q420056) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:07 | 0:16 | 0/0/0 | 0/0/1 | 0/0/0 | 26,918/1,583 | einfracz / qwen3.8-27b | 13 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2015_Anemia](drugs/drug_peginterferon_alfa_2a/pd_Hruska_2015_Anemia.md) | Anemia ← peginterferon lambda-1a · categorical (graded) response model | — | Hruska M et al., Derivation of Phase 3 dosing for pegint…, Journal of clinical pharmac… (2015) | [10.1002/jcph.361](https://doi.org/10.1002/jcph.361) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2015_Grade_3_4_aminotransferase_or_bilirubin_elevations](drugs/drug_peginterferon_alfa_2a/pd_Hruska_2015_Grade_3_4_aminotransferase_or_bilirubin_elevatio.md) | Grade 3-4 aminotransferase or bilirubin elevations ← peginterferon lambda-1a · categorical (graded) response model | — | Hruska M et al., Derivation of Phase 3 dosing for pegint…, Journal of clinical pharmac… (2015) | [10.1002/jcph.361](https://doi.org/10.1002/jcph.361) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2015_Neutropenia](drugs/drug_peginterferon_alfa_2a/pd_Hruska_2015_Neutropenia.md) | Neutropenia ← peginterferon lambda-1a · categorical (graded) response model | — | Hruska M et al., Derivation of Phase 3 dosing for pegint…, Journal of clinical pharmac… (2015) | [10.1002/jcph.361](https://doi.org/10.1002/jcph.361) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hruska_2015_undetectable_HCV_RNA_at_Week_4](drugs/drug_peginterferon_alfa_2a/pd_Hruska_2015_undetectable_HCV_RNA_at_Week_4.md) | undetectable HCV-RNA at Week 4 ← peginterferon lambda-1a · categorical (graded) response model | — | Hruska M et al., Derivation of Phase 3 dosing for pegint…, Journal of clinical pharmac… (2015) | [10.1002/jcph.361](https://doi.org/10.1002/jcph.361) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=peginterferon_alfa_2a) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: IFNA2 (modulator), IFNAR1 (target), IFNAR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brennan_2016.pdf` | Brennan BJ et al., Use of an integrated modelling and simu…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12816](https://doi.org/10.1111/bcp.12816) | [26529640](https://pubmed.ncbi.nlm.nih.gov/26529640) | The paper describes a population PK model for peginterferon alfa-2a, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Jung_2018_2.pdf` | Jung YS et al., Population PK-PD Model of Pegylated Int…, Journal of pharmaceutical s… (2018) | popPK | 10 | [10.1016/j.xphs.2018.08.017](https://doi.org/10.1016/j.xphs.2018.08.017) | [30179597](https://pubmed.ncbi.nlm.nih.gov/30179597) | The paper reports a population PK model for the subject drug, but no quantitative parameter values are present in the provided text. |
| `Silva_2006_2.pdf` | Silva M et al., A randomised trial to compare the pharm…, Journal of hepatology (2006) | popPK | 8 | [10.1016/j.jhep.2006.03.008](https://doi.org/10.1016/j.jhep.2006.03.008) | [16780997](https://pubmed.ncbi.nlm.nih.gov/16780997) | The study is a PK comparison trial for peginterferon alfa-2a, but the evidence only provides a qualitative fold-change in exposure ("approximately 16-fold") and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| `Zeuzem_2001.pdf` | Zeuzem S et al., Peginterferon alfa-2a (40 kDa) monother…, Expert opinion on investiga… (2001) | popPK | 6 | [10.1517/13543784.10.12.2201](https://doi.org/10.1517/13543784.10.12.2201) | [11772316](https://pubmed.ncbi.nlm.nih.gov/11772316) | The text describes qualitative pharmacokinetic properties (sustained absorption, reduced clearance) for peginterferon alfa-2a but contains no numeric parameter values. |

<sub>queue written 2026-10-06T23:07:30.495991+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brennan_2016 | relevant | 10 | 0 | The paper describes a population PK model for peginterferon alfa-2a, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Hruska_2015 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic exposure-response analyses for peginterferon lambda-1a, using peginterferon alfa-2a only as a comparator/control, and does not report PK disposition parameters for peginterferon alfa-2a. |
| popPK | Huang_2021_2 | irrelevant | 0 | 0 | The study evaluates ropeginterferon alfa-2b with peginterferon alfa-2a serving only as a comparator, and no quantitative PK parameters for peginterferon alfa-2a are reported. |
| popPK | Jung_2018_2 | relevant | 10 | 0 | The paper reports a population PK model for the subject drug, but no quantitative parameter values are present in the provided text. |
| popPK | Sharda_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the 40 kDa PEG moiety (PEG40) itself, not the full conjugated drug peginterferon alfa-2a, and reports no specific parameters for the drug of interest. |
| popPK | Silva_2006_2 | relevant | 8 | 1 | The study is a PK comparison trial for peginterferon alfa-2a, but the evidence only provides a qualitative fold-change in exposure ("approximately 16-fold") and lacks specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Talpaz_2005 | relevant | 4 | 5 | The paper reports non-compartmental PK parameters (Cmax, AUC, Tmax) for PEG-IFN alpha-2a in humans, but lacks the specific quantitative disposition parameters (CL, V, Q, ka) or compartmental model definitions required for high-relevance population PK extraction. |
| popPK | Tong_2014 | irrelevant | 0 | 0 | The study investigates viral resistance mutations in the HCV NS5B polymerase, not the pharmacokinetics of peginterferon_alfa_2a. |
| popPK | Zeuzem_2001 | relevant | 6 | 0 | The text describes qualitative pharmacokinetic properties (sustained absorption, reduced clearance) for peginterferon alfa-2a but contains no numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
