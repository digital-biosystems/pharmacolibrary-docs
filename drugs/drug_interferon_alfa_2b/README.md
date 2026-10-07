<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;InterferonAlfa2b_GarcaGarca2016_reference&quot;,&quot;label&quot;:&quot;Garc\u00eda-Garc\u00eda_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# interferon alfa-2b

- **generic name:** interferon alfa-2b
- **ATC codes:** `L03AB05`
- **DrugBank:** [DB00105](https://go.drugbank.com/drugs/DB00105) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Interferon alfa-2b is an immunostimulant interferon used to treat several cancers, including hairy cell leukemia, follicular lymphoma, melanoma and multiple myeloma, as well as chronic hepatitis B and C infections. It is an approved medicine, though some European Union products have been withdrawn, and it has also been studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72483271](https://www.wikidata.org/wiki/Q72483271) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| interferon_alfa_2b | metabolite | 746.528 | C16H17Cl3I2N3NaO5S | PubChem | [71306834](https://pubchem.ncbi.nlm.nih.gov/compound/71306834) | García-García_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:56 | 1:05 | 1/0/0 | 0/0/1 | 0/0/0 | 100,594/6,078 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [García-García_2016_reference](drugs/drug_interferon_alfa_2b/InterferonAlfa2b_GarcaGarca2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | García-García I et al., Pharmacokinetic and pharmacodynamic cha…, BMC pharmacology & toxicolo… (2016) | [10.1186/s40360-016-0103-8](https://doi.org/10.1186/s40360-016-0103-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Talal_2006_HCV_RNA](drugs/drug_interferon_alfa_2b/pd_Talal_2006_HCV_RNA.md) | HCV RNA ← PEG-IFN alpha-2b · indirect response — drug inhibits the production of HCV RNA | model (no simulator) | Talal AH et al., Pharmacodynamics of PEG-IFN alpha diffe…, Hepatology (Baltimore, Md.) (2006) | [10.1002/hep.21136](https://doi.org/10.1002/hep.21136) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=interferon_alfa_2b) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: IFNA2 (modulator), IFNAR1 (binder), IFNAR2 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rozenberg_2009.pdf` | Rozenberg L et al., Therapeutic response to peg-IFN-alpha-2…, AIDS (London, England) (2009) | popPK | 8 | [10.1097/QAD.0b013e32832ff1c0](https://doi.org/10.1097/QAD.0b013e32832ff1c0) | [19898214](https://pubmed.ncbi.nlm.nih.gov/19898214) | The study analyzes PK parameters for peg-IFN-alpha-2b (the relevant form of the subject drug) in humans, but the evidence text only contains qualitative descriptions of similarities without specific numeric values for CL, V, or half-life. |
| `Vinogradova_2015.pdf` | Vinogradova SV et al., Prediction of long-term treatment outco…, Journal of theoretical biol… (2015) | popPK | 8 | [10.1016/j.jtbi.2015.06.041](https://doi.org/10.1016/j.jtbi.2015.06.041) | [26163367](https://pubmed.ncbi.nlm.nih.gov/26163367) | The paper describes a population PKPD model for PEG-IFN alpha-2b, but the specific quantitative parameter values are not provided in the extracted evidence, likely residing in figures or supplementary data. |
| `Jen_2001.pdf` | Jen JF et al., Population pharmacokinetic analysis of…, Clinical pharmacology and t… (2001) | popPK | 5 | [10.1067/mcp.2001.115872](https://doi.org/10.1067/mcp.2001.115872) | [11406738](https://pubmed.ncbi.nlm.nih.gov/11406738) | The abstract mentions apparent clearance values but only reports percentage changes relative to week 4 values, without providing the actual quantitative numeric parameters required for extraction. |

<sub>queue written 2026-10-06T22:55:51.358362+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2002 | irrelevant | 0 | 0 | The study is an efficacy/toxicology study in mice focusing on tumor growth inhibition and biological dosing, not pharmacokinetic parameter estimation. |
| popPK | Huang_2022 | irrelevant | 1 | 1 | The study reports only non-compartmental metrics (Cmax, Tmax, AUC) for a pegylated derivative (ropeginterferon alfa-2b) rather than the quantitative disposition parameters (CL, V, Q) required for the parent drug interferon alfa-2b. |
| popPK | Jen_2001 | irrelevant | 5 | 1 | The abstract mentions apparent clearance values but only reports percentage changes relative to week 4 values, without providing the actual quantitative numeric parameters required for extraction. |
| popPK | Jen_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and dosing of ribavirin, with interferon alfa-2b serving only as a co-administered agent without its own PK parameters being reported. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of modakafusp alfa (a fusion protein), not interferon alfa-2b itself. |
| popPK | Rozenberg_2009 | relevant | 8 | 0 | The study analyzes PK parameters for peg-IFN-alpha-2b (the relevant form of the subject drug) in humans, but the evidence text only contains qualitative descriptions of similarities without specific numeric values for CL, V, or half-life. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal safety (eGFR) and antiviral efficacy, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for interferon_alfa_2b. |
| popPK | Talal_2006 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (EC50) and explicitly states that PK parameters were similar between groups without reporting specific quantitative PK values (CL, V, etc.). |
| popPK | Vinogradova_2015 | relevant | 8 | 0 | The paper describes a population PKPD model for PEG-IFN alpha-2b, but the specific quantitative parameter values are not provided in the extracted evidence, likely residing in figures or supplementary data. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study focuses on renal function and antiviral efficacy (HBsAg clearance) of PEG-IFN-α-2b in chronic hepatitis B patients, without reporting any pharmacokinetic parameters (CL, V, t1/2, etc.) for interferon alfa 2b. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:55 UTC</sub>
