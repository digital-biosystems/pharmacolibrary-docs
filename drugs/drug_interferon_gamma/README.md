<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon gamma&quot;}]"></div>

# interferon gamma

- **generic name:** interferon gamma
- **ATC codes:** `L03AB03`
- **DrugBank:** [DB15753](https://go.drugbank.com/drugs/DB15753) · **PubChem:** not captured
- **groups:** investigational

## About

Interferon gamma-1b is an immunostimulating protein that has been investigated for treating chronic granulomatous disease, osteopetrosis, and certain bacterial infections. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q582356](https://www.wikidata.org/wiki/Q582356) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:09 | 1:00 | 0/0/0 | 0/1/0 | 0/0/0 | 151,727/3,152 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Świerczek_2021_ALT](drugs/drug_interferon_gamma/pd_wierczek_2021_ALT.md) | ALT ← IFN-γ · indirect response — drug stimulates the production of ALT | — | Świerczek A et al., PK/PD Modeling of the PDE7 Inhibitor-GR…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050597](https://doi.org/10.3390/pharmaceutics13050597) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Świerczek_2021_AST](drugs/drug_interferon_gamma/pd_wierczek_2021_AST.md) | AST ← IFN-γ · indirect response — drug stimulates the production of AST | — | Świerczek A et al., PK/PD Modeling of the PDE7 Inhibitor-GR…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050597](https://doi.org/10.3390/pharmaceutics13050597) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Świerczek_2021_IL_10](drugs/drug_interferon_gamma/pd_wierczek_2021_IL_10.md) | IL-10 ← IFN-γ · indirect response — drug inhibits the production of IL-10 | — | Świerczek A et al., PK/PD Modeling of the PDE7 Inhibitor-GR…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050597](https://doi.org/10.3390/pharmaceutics13050597) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=interferon_gamma) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNGR1 (target), IFNGR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 227 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bielski_2025 | irrelevant | 0 | 0 | The study investigates the efficacy of bispecific antibodies targeting VISTA and PD-L1 in vitro, and Interferon-gamma is only measured as a cytokine biomarker of the immune response, not as the subject drug with PK parameters. |
| popPK | Bolinger_1992 | irrelevant | 3 | 2 | The paper is a review article that summarizes pharmacokinetic data (half-life, bioavailability, two-compartment model) but does not provide original quantitative parameter estimates (e.g., specific CL, V, Q values) for extraction. |
| popPK | Brossard_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for emapalumab (an anti-interferon-gamma monoclonal antibody), not for interferon-gamma itself. |
| popPK | Brossard_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for emapalumab (an antibody), not for interferon_gamma, which is the target/ligand being neutralized. |
| popPK | Brunet_2019 | irrelevant | 0 | 0 | The paper is a consensus report on Tacrolimus therapeutic drug monitoring and does not report pharmacokinetic parameters for interferon_gamma. |
| popPK | Cavaillon_2006 | irrelevant | 0 | 0 | The paper is a review of inflammatory pathophysiology and does not report any pharmacokinetic parameters or quantitative disposition data for interferon gamma. |
| popPK | Dai_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiviral agents (mangiferin and taurine) against a fish virus, where interferon-gamma is merely mentioned as a measured cytokine, and no pharmacokinetic parameters are reported. |
| popPK | Frances_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the drug glofitamab, with interferon-gamma serving only as a pharmacodynamic biomarker for cytokine release, not as the subject drug for PK modeling. |
| popPK | Harmon_2020 | irrelevant | 0 | 0 | The study focuses on the synthesis and pharmacodynamics (EC50 values) of prodrugs for T-cell stimulation, not the pharmacokinetic parameters (CL, V, t1/2) of interferon_gamma itself. |
| popPK | Leite_2022 | irrelevant | 0 | 0 | The study measures interferon-gamma concentrations in gingival crevicular fluid as a biomarker for inflammation, not as a pharmacokinetic parameter (CL, V, etc.). |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a study on anti-parasitic drug discovery (Rocaglamide A against Cryptosporidium) and does not contain any pharmacokinetic data or parameters for interferon gamma. |
| popPK | Moyles_2023 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of mRNA vaccine-induced immune responses, where interferon-gamma is a modeled cytokine component, not the subject drug of a pharmacokinetic disposition study. |
| popPK | Passey_2018 | irrelevant | 0 | 0 | The paper is a review of the clinical pharmacology of elotuzumab, not interferon_gamma, and reports PK parameters for the wrong drug. |
| popPK | Tagmouti_2014 | irrelevant | 0 | 0 | The paper is a systematic review of the reproducibility of diagnostic assays for tuberculosis, not a pharmacokinetic study of interferon_gamma as a therapeutic drug. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper investigates BCMA-CD3 bispecific antibodies and mentions IFN-gamma only as a secreted cytokine marker of immune activation, not as a pharmacokinetic subject. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of JNJ-64794964, and interferon_gamma is only mentioned as a PD marker (IP-10) or part of the mechanism, not as the subject drug for PK parameter estimation. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The study investigates the mechanism of action of bakuchiol on colitis and mentions interferon-gamma (Ifn-γ) only as a proinflammatory cytokine whose expression is measured, not as a subject drug for pharmacokinetic analysis. |
| popPK | Yu_2021 | irrelevant | 0 | 0 | The paper studies the synthesis and biological activity of calcitroic acid, using interferon gamma only as an inflammatory stimulus in a mechanistic in vitro assay, not as the subject drug for pharmacokinetic analysis. |
| popPK | Świerczek_2021 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for the drug GRMS-55, while interferon_gamma is only a measured biomarker/cytokine in the disease model, not the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
