<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;lactic acid&quot;}]"></div>

# lactic acid

- **generic name:** lactic acid
- **ATC codes:** `G01AD01`
- **DrugBank:** [DB04398](https://go.drugbank.com/drugs/DB04398) · **PubChem:** [CID 612](https://pubchem.ncbi.nlm.nih.gov/compound/612)
- **molar mass:** 90.0779 g/mol (C3H6O3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Lactic acid is used to treat skin conditions such as dermatitis and facial dermatosis, and as a gynecological antiinfective/antiseptic. It is an approved drug, also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q161249](https://www.wikidata.org/wiki/Q161249) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lactic_acid | metabolite | 90.0779 | C3H6O3 | DrugBank | [612](https://pubchem.ncbi.nlm.nih.gov/compound/612) | Druml_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:05 | 3:03 | 0/0/1 | 0/0/0 | 0/0/0 | 255,409/11,836 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Druml_1991_reference](drugs/drug_lactic_acid/LacticAcid_Druml1991_reference.md) | — | 1-compartment (no model) | 3 | Druml W et al., Lactic acid kinetics in respiratory alk…, Critical care medicine (1991) | [10.1097/00003246-199109000-00005](https://doi.org/10.1097/00003246-199109000-00005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lactic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC16A1 (inhibitor), SLC16A1 (substrate), SLC16A10 (inhibitor), SLC16A10 (substrate), SLC16A3 (substrate), SLC16A7 (inhibitor), SLC16A7 (substrate), SLCO2A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Druml_1991.pdf` | Druml W et al., Lactic acid kinetics in respiratory alk…, Critical care medicine (1991) | popPK | 10 | [10.1097/00003246-199109000-00005](https://doi.org/10.1097/00003246-199109000-00005) | [1884611](https://pubmed.ncbi.nlm.nih.gov/1884611) | The study reports quantitative two-compartment pharmacokinetic parameters (clearance, half-life) for lactic acid in human patients. |

<sub>queue written 2026-10-07T08:03:47.703104+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chu_1998 | irrelevant | 0 | 0 | The study focuses on the antiviral agent L-FMAU, and lactic acid is only mentioned as a negative finding in an in vitro toxicity assay, not as the subject drug for PK analysis. |
| popPK | Cruz_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of silage storage and fermentation (lactic acid production in feed), not a pharmacokinetic study of lactic acid as a drug. |
| popPK | Grindy_2023 | irrelevant | 0 | 0 | The study focuses on bupivacaine and ketorolac; lactic acid is only mentioned as a polymer component (polyethylene glycol-co-lactic acid) and is not the subject of pharmacokinetic analysis. |
| popPK | Hong_2008 | irrelevant | 0 | 0 | The study models the pharmacokinetics of metformin, using lactic acid only as a biomarker for tolerability rather than as the subject drug. |
| popPK | Karabagias_2024 | irrelevant | 0 | 0 | The study focuses on active food packaging films made of poly-lactic acid (PLA) and carvacrol, not the pharmacokinetics of the drug lactic acid in a biological system. |
| popPK | Komez_2020 | irrelevant | 0 | 0 | The paper describes a 3D bone tumor model using Doxorubicin as the subject drug, while lactic acid (in PLGA) is merely a scaffold material. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on microbial community ecology and chain elongation in bioreactors, not pharmacokinetics of lactic acid. |
| popPK | Nakamura_2016 | irrelevant | 0 | 0 | The paper is about the isolation and pharmacological identification of lactoylcholine in fermented food, not the pharmacokinetics of lactic acid. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | The paper describes the mechanism of action of lonidamine and its inhibition of lactic acid transport (MCTs/MPCs) in vitro, rather than reporting pharmacokinetic parameters for lactic acid as a subject drug. |
| popPK | Nunn_2021 | irrelevant | 0 | 0 | The study measures lactic acid levels in vaginal fluid as a biomarker of microbiome changes, not pharmacokinetic parameters (CL, V, etc.) of lactic acid as a drug. |
| popPK | Quintana_2020 | irrelevant | 0 | 0 | The paper studies lactic acid bacteria (microorganisms) in sheep milk, not the pharmacokinetics of lactic acid as a drug. |
| popPK | Rogalska_2024 | irrelevant | 0 | 0 | The paper is a food science study on yogurt formulation and antioxidant activity of cocoa phenolics, not a pharmacokinetic study of lactic acid. |
| popPK | Shen_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not lactic acid; lactic acid is only mentioned as a pharmacodynamic biomarker of adverse effects. |
| popPK | Spires_1983 | irrelevant | 0 | 0 | The study investigates the fermentation effects of ionophores in rumen fluid and feedlot performance, not the pharmacokinetics of lactic acid. |
| popPK | Stasiłowicz-Krzemień_2024 | irrelevant | 0 | 0 | The paper is a chemical engineering study on the extraction of curcuminoids from turmeric, where lactic acid is used as a solvent component, not as a subject of pharmacokinetic investigation. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study investigates the anti-seizure mechanisms of α-Asaronol in zebrafish and mice, focusing on GABA receptors and lactate dehydrogenase inhibition, but does not report pharmacokinetic parameters for lactic acid. |
| popPK | Teplinsky_1990 | irrelevant | 0 | 0 | The study is a hemodynamic investigation of the physiological effects of lactic acidosis in dogs, not a pharmacokinetic analysis of lactic acid disposition parameters. |
| popPK | Ulmer_2023 | irrelevant | 0 | 0 | The study is an in vitro bioprocess engineering paper analyzing microbial interactions in a bioreactor, not a pharmacokinetic study of the drug lactic acid in a biological host. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a clinical study comparing cosmetic fillers (HA vs PLLA) and does not report pharmacokinetic parameters for lactic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:03 UTC</sub>
