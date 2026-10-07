<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;peginterferon alfa-2b&quot;}]"></div>

# peginterferon alfa-2b

- **generic name:** peginterferon alfa-2b
- **ATC codes:** `L03AB10`
- **DrugBank:** [DB00022](https://go.drugbank.com/drugs/DB00022) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Peginterferon alfa-2b is an antiviral immunostimulant used to treat chronic hepatitis C and melanoma. It has been an approved medicine and is listed among WHO essential medicines, although some of its European marketing authorisations have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7160789](https://www.wikidata.org/wiki/Q7160789) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:11 | 1:11 | 0/1/1 | 3/1/0 | 0/0/0 | 118,915/10,724 | einfracz / qwen3.8-27b | 18 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q47 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Gupta_2007_reference](drugs/drug_peginterferon_alfa_2b/PeginterferonAlfa2b_Gupta2007_reference.md) | — | 1-compartment (no model) | 4 | Gupta S et al., Dose selection and population pharmacok…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2006.02757.x](https://doi.org/10.1111/j.1365-2125.2006.02757.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Xu_2013_2_reference](drugs/drug_peginterferon_alfa_2b/PeginterferonAlfa2b_Xu2013v2_reference.md) | — | 1-compartment (no model) | 0 | Xu C et al., Population pharmacokinetics of peginter…, European journal of clinica… (2013) | [10.1007/s00228-013-1574-9](https://doi.org/10.1007/s00228-013-1574-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Jian_2026_PLT](drugs/drug_peginterferon_alfa_2b/pd_Jian_2026_PLT.md) | Platelet ← peginterferon_alfa_2b · indirect response — drug inhibits the production of Platelet | — | Jian W et al., Drug Repositioning of Pegbing® for Esse…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70079](https://doi.org/10.1002/cpt.70079) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Jian_2026_WBC](drugs/drug_peginterferon_alfa_2b/pd_Jian_2026_WBC.md) | White blood cell ← peginterferon_alfa_2b · indirect response — drug inhibits the production of White blood cell | — | Jian W et al., Drug Repositioning of Pegbing® for Esse…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70079](https://doi.org/10.1002/cpt.70079) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rozenberg_2009_2_HCV_RNA](drugs/drug_peginterferon_alfa_2b/pd_Rozenberg_2009_2_HCV_RNA.md) | HCV viral load ← peginterferon_alfa_2b · inhibition effect | — | Rozenberg L et al., Therapeutic response to peg-IFN-alpha-2…, AIDS (London, England) (2009) | [10.1097/QAD.0b013e32832ff1c0](https://doi.org/10.1097/QAD.0b013e32832ff1c0) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Talal_2006_2_HCV_RNA](drugs/drug_peginterferon_alfa_2b/pd_Talal_2006_2_HCV_RNA.md) | HCV RNA ← peginterferon_alfa_2b · disease-progression model | — | Talal AH et al., Pharmacodynamics of PEG-IFN alpha diffe…, Hepatology (Baltimore, Md.) (2006) | [10.1002/hep.21136](https://doi.org/10.1002/hep.21136) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Vinogradova_2015_2_HCV](drugs/drug_peginterferon_alfa_2b/pd_Vinogradova_2015_2_HCV.md) | HCV production ← PEG-IFN · direct Emax (saturable) effect | — | Vinogradova SV et al., Prediction of long-term treatment outco…, Journal of theoretical biol… (2015) | [10.1016/j.jtbi.2015.06.041](https://doi.org/10.1016/j.jtbi.2015.06.041) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=peginterferon_alfa_2b) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C9` inducer, `CYP2D6` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IFNA2 (modulator), IFNAR1 (target), IFNAR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2013_2.pdf` | Xu C et al., Population pharmacokinetics of peginter…, European journal of clinica… (2013) | popPK | 10 | [10.1007/s00228-013-1574-9](https://doi.org/10.1007/s00228-013-1574-9) | [23975236](https://pubmed.ncbi.nlm.nih.gov/23975236) | The paper reports a population PK model for peginterferon alfa-2b with a specific mean BSA-normalized clearance value (0.56 L/h/m2) provided in the text, although other parameter estimates (Vd, half-life, IIV) are not explicitly listed in the extracted evidence. |
| `Rozenberg_2009_2.pdf` | Rozenberg L et al., Therapeutic response to peg-IFN-alpha-2…, AIDS (London, England) (2009) | popPK | 7 | [10.1097/QAD.0b013e32832ff1c0](https://doi.org/10.1097/QAD.0b013e32832ff1c0) | [19898214](https://pubmed.ncbi.nlm.nih.gov/19898214) | The study models the pharmacokinetics and pharmacodynamics of peginterferon alfa-2b, but the abstract only provides qualitative descriptions of parameters (e.g., "similar") without reporting specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-06T23:10:43.107521+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2002 | irrelevant | 0 | 0 | This is an in vivo efficacy study in mice focusing on tumor growth inhibition, not a pharmacokinetic study reporting disposition parameters for peginterferon_alfa_2b. |
| popPK | Jian_2026 | relevant | 8 | 2 | The study uses a population PK model for peginterferon alfa-2b to drive PD simulations, but the specific numeric PK parameter values (CL, V, etc.) are referenced as being in Supplementary Methods or a previously published source rather than listed in the provided text. |
| popPK | Rozenberg_2009_2 | relevant | 7 | 0 | The study models the pharmacokinetics and pharmacodynamics of peginterferon alfa-2b, but the abstract only provides qualitative descriptions of parameters (e.g., "similar") without reporting specific numeric values for clearance, volume, or half-life. |
| popPK | Silva_2006_2 | relevant | 4 | 0 | The study reports comparative pharmacokinetic exposure metrics (qualitative/relative) for peginterferon alfa-2b in humans, but specific quantitative parameters (CL, V, Cmax) are not present in the provided evidence text. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The study assesses renal function (eGFR) as a safety endpoint in a clinical trial and does not report pharmacokinetic parameters (CL, V, t1/2, etc.) for peginterferon alfa-2b. |
| popPK | Talal_2006_2 | irrelevant | 3 | 0 | The study focuses on pharmacodynamics (EC50, therapeutic quotient) and explicitly states that pharmacokinetic parameters were similar between groups, without reporting specific quantitative PK values like clearance or volume in the provided text. |
| popPK | Vinogradova_2015_2 | irrelevant | 4 | 0 | The study analyzes PKPD parameters for PEG-IFN alpha-2b but the evidence indicates parameters were "similar" in responders and non-responders without providing the specific quantitative values (CL, V, etc.) for PEG-IFN alpha-2b. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study evaluates renal function biomarkers and antiviral efficacy in hepatitis B patients, not the pharmacokinetic parameters (CL, Vd, etc.) of peginterferon_alfa_2b. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:10 UTC</sub>
