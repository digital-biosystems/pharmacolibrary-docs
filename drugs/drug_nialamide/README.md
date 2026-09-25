<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nialamide&quot;}]"></div>

# nialamide

- **generic name:** nialamide
- **ATC codes:** `N06AF02`
- **DrugBank:** [DB04820](https://go.drugbank.com/drugs/DB04820)
- **groups:** approved, withdrawn

## About

**Description.** Withdrawn from the Canadian, US, and UK markets in 1963 due to interactions with food products containing tyrosine.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 01:32 | 6:09 | 0/0/0 | 0/0/0 | 0/0/0 | 24,619/2,079 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nialamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `COMT` unknown, `MAOA` unknown, `MAOB` unknown | DrugBank actor |
| metabolism | kidney | `COMT` unknown | DrugBank actor |
| metabolism | liver | `COMT` unknown, `MAOA` unknown | DrugBank actor |
| metabolism | platelet | `MAOB` unknown | DrugBank actor |
| metabolism | small intestine | `MAOA` unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Purcell_1989.pdf` | Purcell WM et al., Contribution of post-secretory mechanis…, International archives of a… (1989) | pd | 4 | [10.1159/000235059](https://doi.org/10.1159/000235059) | [2482259](https://www.ncbi.nlm.nih.gov/pubmed/2482259) | metadata signals extractable PD data (concentrationeffect) |
| `Silva_2025.pdf` | Silva Franco L et al., Drug Repurposing by Virtual Screening:…, ACS omega (2025) | pd | 4 | [10.1021/acsomega.5c04340](https://doi.org/10.1021/acsomega.5c04340) | [40657111](https://www.ncbi.nlm.nih.gov/pubmed/40657111) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-24T01:31:46.215164+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2012 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition (IC50) values for nialamide, not pharmacokinetic disposition parameters. |
| popPK | Camargo_1976 | irrelevant | 0 | 0 | The study investigates the physiological effects of catecholamines on renal function in rats, using nialamide only as a mechanistic tool (MAO inhibitor) rather than as the subject of pharmacokinetic analysis. |
| PD | Camargo_1976 | not_relevant | 1 | 0 | The paper mentions nialamide only as a mechanism-based enhancer of norepinephrine effects (MAO inhibition) without providing any numeric dose-response or concentration-effect data for nialamide itself. |
| popPK | Corrodi_1975 | irrelevant | 0 | 0 | The paper is a mechanistic study on ergot drugs and 5-HT neurons where nialamide is used only as a co-administered agent, with no pharmacokinetic parameters reported. |
| PD | Corrodi_1975 | not_relevant | 1 | 1 | The paper focuses on ergot drugs (ergocornine, MPME) and only mentions nialamide qualitatively as a pretreatment agent to enhance MPME effects, without providing any exposure-response or dose-response data for nialamide itself. |
| popPK | Córdoba_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice focusing on the anti-immobility response, not a pharmacokinetic study, and reports no disposition parameters for nialamide. |
| PD | Córdoba_1990 | not_relevant | 1 | 0 | The paper mentions nialamide only as one of several treatments whose effects were enhanced by gangliosides, but it does not report any specific exposure-response or dose-response data, numeric PD parameters, or concentration-effect curves for nialamide itself. |
| popPK | Datla_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of aggression in rats and does not report any pharmacokinetic parameters for nialamide. |
| PD | Datla_1990 | not_relevant | 1 | 0 | The paper describes behavioral effects of nialamide but does not provide numeric concentration-effect data, dose-response curves, or PD parameters in the provided text. |
| popPK | Goyal_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscle contraction mechanisms, not a pharmacokinetic study, and reports no disposition parameters for nialamide. |
| PD | Goyal_1981 | not_relevant | 3 | 2 | The paper describes a qualitative leftward shift of dose-response curves for 5HT and NA in the presence of nialamide, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for nialamide itself. |
| popPK | Kürten_2022 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of epilepsy and protein expression where nialamide is used as a pharmacological agent, not a pharmacokinetic study. |
| popPK | Lopez_1989 | irrelevant | 0 | 0 | The study investigates the effect of nialamide on the pharmacokinetics of urea, uric acid, and creatinine, not the pharmacokinetic parameters of nialamide itself. |
| popPK | Miyauchi_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methamphetamine, with nialamide serving only as a pretreatment agent to test mechanisms, and no PK parameters for nialamide are reported. |
| popPK | OSMAN_1961 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | OSMAN_1961 | not_relevant | 1 | 0 | The text is a qualitative review of nialamide's pharmacology and clinical premises, lacking any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Purcell_1989 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Purcell_1989 | not_relevant | 0 | 0 | The paper focuses on histamine and 5-HT secretion from mast cells in response to compound 48/80 and does not mention nialamide or report any pharmacodynamic parameters for it. |
| popPK | Shah_1986 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of levamisole on blood pressure, using nialamide only as a pretreatment agent, and reports no pharmacokinetic parameters for nialamide. |
| PD | Shah_1986 | not_relevant | 1 | 0 | The paper investigates levamisole, not nialamide; nialamide is only mentioned as a pretreatment agent that qualitatively shifts the levamisole dose-response curve, with no numeric PD parameters provided for nialamide itself. |
| popPK | Silva_2025 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Silva_2025 | not_relevant | 0 | 0 | The paper focuses on virtual screening for ROCK inhibitors and does not report any pharmacodynamic or exposure-response data for nialamide. |
| popPK | Vogh_1984 | irrelevant | 0 | 0 | The study investigates the physiological effect of nialamide on cerebrospinal fluid formation, not its pharmacokinetic disposition parameters. |
| popPK | Wayment_2001 | irrelevant | 0 | 0 | The study investigates dopamine clearance kinetics in rat brain tissue, using nialamide only as a monoamine oxidase inhibitor tool compound rather than as the subject drug for pharmacokinetic analysis. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The study investigates neurochemical effects (neurotransmitter levels and enzyme activity) rather than pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
