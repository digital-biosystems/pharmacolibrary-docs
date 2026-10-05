<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor VIII&quot;}]"></div>

# coagulation factor VIII

- **generic name:** coagulation factor VIII
- **ATC codes:** `B02BD02`
- **DrugBank:** [DB00025](https://go.drugbank.com/drugs/DB00025) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Coagulation factor VIII (antihemophilic factor) is a clotting protein used to treat bleeding disorders such as hemophilia A, von Willebrand's disease, and factor VII deficiency. It is an approved medicine, given as replacement therapy to prevent or control bleeding in patients lacking this factor.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801759](https://www.wikidata.org/wiki/Q20801759) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:47 | 6:16 | 0/3/0 | 0/0/0 | 0/0/0 | 64,939/22,740 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Blanchette_2021_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Blanchette2021_reference.md) | — | 1-compartment (no model) | 0 | Blanchette VS et al., A Practical, One-Clinic Visit Protocol…, Thrombosis and haemostasis (2021) | [10.1055/a-1376-0970](https://doi.org/10.1055/a-1376-0970) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hua_2019_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Hua2019_reference.md) | — | 1-compartment (no model) | 0 | Hua BL et al., [Population pharmacokinetics of two rec…, Zhonghua xue ye xue za zhi… (2019) | [10.3760/cma.j.issn.0253-2727.2019.08.009](https://doi.org/10.3760/cma.j.issn.0253-2727.2019.08.009) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Preijers_2018_reference](drugs/drug_coagulation_factor_viii/CoagulationFactorViii_Preijers2018_reference.md) | — | 1-compartment (no model) | 1 | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=coagulation_factor_viii) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ASGR2 (binder), CALR (chaperone), CANX (chaperone), F10 (activator), F2 (activator), F9 (cofactor), HSPA5 (chaperone), LMAN1 (binder), LMAN1 (transporter), LRP1 (modulator), MCFD2 (modulator), PHYH (target), PROC (substrate), VWF (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiménez-Yuste_2015.pdf` | Jiménez-Yuste V et al., The pharmacokinetics of a B-domain trun…, Journal of thrombosis and h… (2015) | popPK | 10 | [10.1111/jth.12816](https://doi.org/10.1111/jth.12816) | [25495795](https://pubmed.ncbi.nlm.nih.gov/25495795) | The paper reports population PK parameters for coagulation factor VIII (turoctocog alfa) in humans, but the specific numeric values are not present in the provided evidence text. |
| `Zhang_2017.pdf` | Zhang Y et al., Population pharmacokinetics of recombin…, Journal of thrombosis and h… (2017) | popPK | 10 | [10.1111/jth.13662](https://doi.org/10.1111/jth.13662) | [28244200](https://pubmed.ncbi.nlm.nih.gov/28244200) | The paper describes a population PK model for coagulation factor VIII, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Di_2007.pdf` | Di Paola J et al., ReFacto and Advate: a single-dose, rand…, Haemophilia : the official… (2007) | popPK | 9 | [10.1111/j.1365-2516.2006.01420.x](https://doi.org/10.1111/j.1365-2516.2006.01420.x) | [17286764](https://pubmed.ncbi.nlm.nih.gov/17286764) | The paper describes a pharmacokinetic study of Factor VIII (ReFacto and Advate) in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided evidence text. |
| `Preijers_2018.pdf` | Preijers T et al., Cross-evaluation of Pharmacokinetic-Gui…, Thrombosis and haemostasis (2018) | popPK | 9 | [10.1055/s-0038-1623531](https://doi.org/10.1055/s-0038-1623531) | [29534249](https://pubmed.ncbi.nlm.nih.gov/29534249) | The study reports quantitative PK parameters (half-life, time to trough) for Factor VIII in humans, with specific numeric values provided in the abstract. |
| `Hua_2019.pdf` | Hua BL et al., [Population pharmacokinetics of two rec…, Zhonghua xue ye xue za zhi… (2019) | popPK | 8 | [10.3760/cma.j.issn.0253-2727.2019.08.009](https://doi.org/10.3760/cma.j.issn.0253-2727.2019.08.009) | [31495135](https://pubmed.ncbi.nlm.nih.gov/31495135) | The study reports quantitative pharmacokinetic parameters (half-life and time to activity threshold) for coagulation factor VIII in human patients, with values explicitly listed in the text. |
| `Kim_2024.pdf` | Kim MS et al., Kinetic Modeling for BT200 to Predict t…, The AAPS journal (2024) | popPK | 8 | [10.1208/s12248-024-00952-4](https://doi.org/10.1208/s12248-024-00952-4) | [38992298](https://pubmed.ncbi.nlm.nih.gov/38992298) | The paper describes a population PK/PD model for FVIII, but the specific numeric parameter values are not present in the provided evidence text. |
| `Lissitchkov_2017.pdf` | Lissitchkov T et al., PK-guided personalized prophylaxis with…, Haemophilia : the official… (2017) | popPK | 8 | [10.1111/hae.13251](https://doi.org/10.1111/hae.13251) | [28452151](https://pubmed.ncbi.nlm.nih.gov/28452151) | The study describes a PK-guided regimen for FVIII (Nuwiq) in humans, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only dosing intervals and bleeding rates. |

<sub>queue written 2026-10-05T18:41:44.300091+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bauer_2023 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of von Willebrand factor (VWF) and its effect on Factor VIII activity, rather than reporting quantitative disposition parameters (CL, V, etc.) for Factor VIII as the primary subject drug. |
| popPK | Di_2007 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of Factor VIII (ReFacto and Advate) in humans, but the specific numeric parameter values (CL, V, AUC, etc.) are not present in the provided evidence text. |
| popPK | Jiménez-Yuste_2015 | relevant | 10 | 2 | The paper reports population PK parameters for coagulation factor VIII (turoctocog alfa) in humans, but the specific numeric values are not present in the provided evidence text. |
| popPK | Kim_2024 | relevant | 8 | 0 | The paper describes a population PK/PD model for FVIII, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Lissitchkov_2017 | relevant | 8 | 2 | The study describes a PK-guided regimen for FVIII (Nuwiq) in humans, but the specific quantitative PK parameters (CL, V, etc.) are not listed in the provided text, only dosing intervals and bleeding rates. |
| popPK | Zhang_2017 | relevant | 10 | 0 | The paper describes a population PK model for coagulation factor VIII, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 18:42 UTC</sub>
