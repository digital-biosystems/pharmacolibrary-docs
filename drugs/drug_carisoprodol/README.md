<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;carisoprodol&quot;}]"></div>

# carisoprodol

- **generic name:** carisoprodol
- **ATC codes:** `M03BA02`
- **DrugBank:** [DB00395](https://go.drugbank.com/drugs/DB00395) · **PubChem:** [CID 2576](https://pubchem.ncbi.nlm.nih.gov/compound/2576)
- **molar mass:** 260.33 g/mol (C12H24N2O4) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416905](https://www.wikidata.org/wiki/Q416905) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meprobamate | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:30 | 2:29 | 0/2/0 | 0/0/0 | 0/0/0 | 246,274/10,085 | einfracz / qwen3.8-27b | 12 | 2/10 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Calvo_2022_reference](drugs/drug_carisoprodol/Carisoprodol_Calvo2022_reference.md) | — | 1-compartment (no model) | 2 | Calvo A et al., Single and Multiple Dose PK-PD Characte…, Journal of clinical medicine (2022) | [10.3390/jcm11030858](https://doi.org/10.3390/jcm11030858) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lewandowski_2017_reference](drugs/drug_carisoprodol/Carisoprodol_Lewandowski2017_reference.md) | — | parent + metabolite (no model) | 0 | Lewandowski TA, Pharmacokinetic modeling of carisoprodo…, Human & experimental toxico… (2017) | [10.1177/0960327116672912](https://doi.org/10.1177/0960327116672912) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carisoprodol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (activator), GABRA1 (modulator), GABRA3 (modulator), GABRA5 (modulator), GABRB2 (modulator), GABRG2 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 285 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lewandowski_2017.pdf` | Lewandowski TA, Pharmacokinetic modeling of carisoprodo…, Human & experimental toxico… (2017) | popPK | 9 | [10.1177/0960327116672912](https://doi.org/10.1177/0960327116672912) | [27758843](https://pubmed.ncbi.nlm.nih.gov/27758843) | The abstract explicitly reports numeric ranges for the volume of distribution (Vd) for carisoprodol and its metabolite meprobamate in a two-compartment model. |

<sub>queue written 2026-10-07T02:29:04.992868+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calvo_2022_2 | irrelevant | 2 | 0 | This is primarily a pharmacodynamic (PD) study (Part II) which refers the pharmacokinetic (PK) data to a separate Part I paper and contains no quantitative PK parameters (CL, V, ka) for carisoprodol. |
| popPK | Cresswell-Clay_2018 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of calcium dynamics in astrocytes and contains no data, parameters, or mentions of the drug carisoprodol. |
| popPK | Donley_2021 | irrelevant | 0 | 0 | The paper studies the kynurenine pathway in a Huntington's disease mouse model and does not investigate the pharmacokinetics of carisoprodol. |
| popPK | Gautam_2022 | irrelevant | 0 | 0 | The paper describes a conductance-based silicon synapse circuit for neuromorphic computing and contains no pharmacokinetic data for carisoprodol. |
| popPK | Goldwyn_2019 | irrelevant | 0 | 0 | The paper is a computational neuroscience study on neuronal coincidence detection in the auditory brainstem and does not involve the drug carisoprodol or pharmacokinetics. |
| popPK | Hjorth_2020 | irrelevant | 0 | 0 | The paper is a computational modeling study of striatal microcircuits in mouse neurons and does not contain any pharmacokinetic data for carisoprodol. |
| popPK | Kim_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper on orexins in rats and does not involve carisoprodol or its pharmacokinetics. |
| popPK | Lafon_2017 | irrelevant | 0 | 0 | The study investigates the mechanism of direct current stimulation on neuronal activity in rat brain slices and does not report any pharmacokinetic parameters for carisoprodol. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper describes a computational model for spiking neural networks (SNNs) and contains no pharmacokinetic data or information regarding the drug carisoprodol. |
| popPK | Lowe_1993 | irrelevant | 0 | 0 | The paper describes olfactory transduction in salamanders and contains no pharmacokinetic data for carisoprodol. |
| popPK | Magoski_1995 | irrelevant | 0 | 0 | The paper investigates dopaminergic transmission in a mollusk and does not study carisoprodol pharmacokinetics. |
| popPK | Orser_1994 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of propofol on GABA receptors in mouse neurons and does not involve carisoprodol. |
| popPK | Pétriz_2014 | irrelevant | 0 | 0 | The paper investigates GABA receptor subunits in cerebellar glial cells and does not involve carisoprodol pharmacokinetics. |
| popPK | Veasey_2004 | irrelevant | 0 | 0 | The study investigates neurophysiology in rats exposed to intermittent hypoxia and contains no data regarding carisoprodol pharmacokinetics. |
| popPK | Wen_2019 | irrelevant | 0 | 0 | The study evaluates shear wave elastography for radiation-induced neck fibrosis and contains no pharmacokinetic data for carisoprodol. |
| popPK | Woo_2022 | irrelevant | 0 | 0 | The paper is a computational neuroscience study on neuronal structure and dynamics, containing no data regarding the drug carisoprodol or its pharmacokinetics. |
| popPK | Ye_2021 | irrelevant | 0 | 0 | The paper investigates magnetic stimulation of Aplysia neurons and contains no data regarding the pharmacokinetics or drug carisoprodol. |
| popPK | Zang_2023 | irrelevant | 0 | 0 | The paper is a computational study on neuronal compartmental models and ion channel robustness, containing no pharmacokinetic data for carisoprodol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:29 UTC</sub>
