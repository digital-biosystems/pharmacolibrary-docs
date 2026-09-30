<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;nicergoline&quot;}]"></div>

# nicergoline

- **generic name:** nicergoline
- **ATC codes:** `C04AE02`
- **DrugBank:** [DB00699](https://go.drugbank.com/drugs/DB00699) · **PubChem:** [CID 34040](https://pubchem.ncbi.nlm.nih.gov/compound/34040)
- **molar mass:** 484.386 g/mol (C24H26BrN3O3) — DrugBank
- **groups:** approved

## About

**Description.** An ergot derivative that has been used as a cerebral vasodilator and in peripheral vascular disease. It has been suggested to ameliorate cognitive deficits in cerebrovascular disease.

**Indication.** For the treatment of senile dementia, migraines of vascular origin, transient ischemia, platelet hyper-aggregability, and macular degeneration.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 17:34 | 9:29 | 0/0/0 | 0/0/0 | 0/0/0 | 38,319/2,355 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicergoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpéné_1983.pdf` | Carpéné C et al., [Evidence for an alpha 2-blocking prope…, Journal de pharmacologie (1983) | pd | 4 | not captured | [6132024](https://www.ncbi.nlm.nih.gov/pubmed/6132024) | metadata signals extractable PD data (EC50) |
| `Lanza_1986.pdf` | Lanza F et al., Potentiation by adrenaline of human pla…, Agents and actions (1986) | pd | 4 | [10.1007/BF01964968](https://doi.org/10.1007/BF01964968) | [3020942](https://www.ncbi.nlm.nih.gov/pubmed/3020942) | metadata signals extractable PD data (IC50) |
| `Moretti_1988.pdf` | Moretti A et al., Effect of ergolines on neurotransmitter…, Archives internationales de… (1988) | pd | 4 | not captured | [2906797](https://www.ncbi.nlm.nih.gov/pubmed/2906797) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T17:33:00.290428+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benzi_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of mitochondrial enzyme activity in rats, not a pharmacokinetic study, and reports no disposition parameters for nicergoline. |
| PD | Benzi_1975 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects of nicergoline on mitochondrial enzyme activity timing but provides no numeric PD parameters, concentration-effect curves, or quantitative dose-response data. |
| popPK | Caine_1984 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic alpha-adrenergic blocking effects of nicergoline in vivo and in vitro, reporting no pharmacokinetic parameters. |
| popPK | Carpéné_1983 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Ezan_2001 | irrelevant | 2 | 0 | The paper describes the development and validation of immunoassays for nicergoline and reports no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Heitz_1986 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects (alpha-adrenoceptor and calcium antagonism) in rat isolated aorta, not pharmacokinetic disposition parameters. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an in-vitro screening for corneal protection and does not report any pharmacokinetic parameters for nicergoline. |
| PD | Kim_2017 | not_relevant | 2 | 1 | The paper reports qualitative screening results and specific concentrations (20/100 μM) for viability, but does not provide a dose-response curve, Emax, or EC50 for nicergoline. |
| popPK | Kugler_1984 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on symptom improvement and does not report any pharmacokinetic parameters for nicergoline. |
| PD | Kugler_1984 | not_relevant | 1 | 0 | The paper describes a clinical observation study of symptom improvement over one year but does not report any concentration-effect data, dose-response curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Kugler_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on EEG and psychometric outcomes, containing no pharmacokinetic parameters or quantitative disposition data for nicergoline. |
| PD | Kugler_1985 | not_relevant | 1 | 0 | The paper reports qualitative EEG changes and psychometric outcomes but provides no numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Lanza_1986 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of brimonidine in pig ciliary processes where nicergoline is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Liu_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of brimonidine's effect on nitrite production; nicergoline is used only as a single-dose control antagonist and no PD parameters or dose-response relationship for nicergoline are reported. |
| popPK | Lograno_2000 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating pharmacodynamics, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mankovskiĭ_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing cerebral circulation and EEG changes, not a pharmacokinetic study reporting quantitative disposition parameters for nicergoline. |
| popPK | Moretti_1988 | irrelevant | 0 | 0 | The study focuses on in vitro receptor affinity and in vivo neurotransmitter turnover, not pharmacokinetic disposition parameters. |
| PD | Moretti_1988 | not_relevant | 3 | 2 | The paper reports in vitro receptor binding affinities (IC50) and qualitative changes in neurotransmitter turnover after fixed doses, but it does not provide a quantitative exposure-response or dose-response curve with derivable PD parameters like Emax or EC50 for the pharmacodynamic effect. |
| popPK | Nikolov_1987 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic study on cerebroprotective effects in animals and does not report any pharmacokinetic parameters for nicergoline. |
| PD | Nikolov_1987 | not_relevant | 3 | 0 | The text describes a qualitative shift in the dose-response curve (synergism) but does not provide any numeric PD parameters, specific dose values, or extractable concentration-effect data. |
| popPK | Nikolov_1989 | irrelevant | 0 | 0 | The study investigates the cerebroprotective effects of prostacyclin and nicergoline is only mentioned as a co-administered agent in a pharmacodynamic interaction study, with no pharmacokinetic parameters reported. |
| PD | Nikolov_1989 | not_relevant | 1 | 0 | The paper focuses on prostacyclin (PGI2) and only qualitatively mentions that nicergoline shifts the PGI2 dose-response curve, without providing any numeric PD parameters or concentration-effect data for nicergoline itself. |
| popPK | Perrier_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium channels in rat brain slices where nicergoline is used as a pharmacological tool, not a pharmacokinetic study. |
| popPK | Saletu_1979 | irrelevant | 0 | 0 | no_text gate: only 180 chars of text extracted (&lt; 400) |
| popPK | Saletu_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic/EEG investigation of nicergoline's effects on brain activity and memory, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Saletu_1990 | not_relevant | 3 | 1 | The study reports qualitative EEG changes and peak times for two doses but does not provide numeric concentration-effect parameters or a fitted PD model. |
| popPK | Sanchez-Rodriguez_2024 | irrelevant | 0 | 0 | The paper is a neuroimaging and transcriptomics study on Alzheimer's disease mechanisms and does not report pharmacokinetic parameters for nicergoline. |
| PD | Sanchez-Rodriguez_2024 | not_relevant | 0 | 0 | The paper focuses on computational modeling of Alzheimer's pathology (Aβ/tau) effects on fMRI signals and drug repurposing via transcriptomics; it does not report pharmacokinetic or pharmacodynamic data for nicergoline. |
| popPK | Sanderink_1997 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of riluzole, and nicergoline is only mentioned as a weak inhibitor of CYP1A2, with no pharmacokinetic parameters reported for nicergoline. |
| PD | Sanderink_1997 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of riluzole and mentions nicergoline only as a weak inhibitor of CYP1A2 (IC50 ~200-500 microM), which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for nicergoline. |
| PGx | Sanderink_1997 | not_relevant | 0 | 0 | The paper focuses on the metabolism of riluzole and only mentions nicergoline as a weak inhibitor of riluzole metabolism, without reporting any pharmacogenomic effects on nicergoline's PK or PD parameters. |
| popPK | Shintomi_1991 | irrelevant | 0 | 0 | The study is a pharmacological investigation of cerebral blood flow and gas exchange in rats, not a pharmacokinetic study reporting disposition parameters for nicergoline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
