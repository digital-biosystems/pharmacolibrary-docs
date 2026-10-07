<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;methohexital&quot;}]"></div>

# methohexital

- **generic name:** methohexital
- **ATC codes:** `N01AF01`, `N05CA15`
- **DrugBank:** [DB00474](https://go.drugbank.com/drugs/DB00474) · **PubChem:** [CID 9034](https://pubchem.ncbi.nlm.nih.gov/compound/9034)
- **molar mass:** 262.3043 g/mol (C14H18N2O3) — DrugBank
- **groups:** approved

## About

Methohexital is a barbiturate used as a short-acting intravenous general anesthetic and sedative-hypnotic. It is an approved drug, used mainly in hospital settings for anesthesia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q851813](https://www.wikidata.org/wiki/Q851813) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:56 | 1:18 | 0/0/0 | 0/2/0 | 0/0/0 | 17,707/16,637 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Barann_2000_5_HT_induced_currents](drugs/drug_methohexital/pd_Barann_2000_5_HT_induced_currents.md) | 5-HT-induced currents ← methohexital · direct sigmoid Emax (Hill) effect | — | Barann M et al., Recombinant human 5-HT3A receptors in o…, Naunyn-Schmiedeberg's archi… (2000) | [10.1007/s002100000288](https://doi.org/10.1007/s002100000288) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Todorovic_1998_T_current](drugs/drug_methohexital/pd_Todorovic_1998_T_current.md) | low-voltage-activated (LVA) Ca2+ current ← methohexital · direct sigmoid Emax (Hill) effect | — | Todorovic SM et al., Pharmacological properties of T-type Ca…, Journal of neurophysiology (1998) | [10.1152/jn.1998.79.1.240](https://doi.org/10.1152/jn.1998.79.1.240) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methohexital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bally_1992.pdf` | Bally B et al., [Pharmacokinetics of methohexital given…, Annales francaises d'anesth… (1992) | popPK | 10 | [10.1016/s0750-7658(05)80003-6](https://doi.org/10.1016/s0750-7658(05)80003-6) | [1503284](https://pubmed.ncbi.nlm.nih.gov/1503284) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, compartmental models) for methohexital in humans. |
| `Kraus_1984.pdf` | Kraus G et al., [Pharmacokinetic studies following intr…, Der Anaesthesist (1984) | popPK | 9 | not captured | [6548095](https://pubmed.ncbi.nlm.nih.gov/6548095) | The study reports a two-compartment model and qualitative changes in clearance and half-life for methohexital in children, but specific numeric values for CL, V, and Q are not provided in the evidence text. |
| `Voss_2007.pdf` | Voss LJ et al., A comparison of pharmacokinetic/pharmac…, Anesthesia and analgesia (2007) | pd | 5 | [10.1213/01.ane.0000263274.62303.1a](https://doi.org/10.1213/01.ane.0000263274.62303.1a) | [17513638](https://www.ncbi.nlm.nih.gov/pubmed/17513638) | metadata signals extractable PD data (PK/PD) |
| `Daniels_1998.pdf` | Daniels S et al., Post-synaptic inhibitory mechanisms of…, Toxicology letters (1998) | pd | 4 | [10.1016/s0378-4274(98)00167-2](https://doi.org/10.1016/s0378-4274(98)00167-2) | [10049183](https://www.ncbi.nlm.nih.gov/pubmed/10049183) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T03:55:25.813734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barann_2000 | irrelevant | 0 | 0 | The study is an in vitro electrophysiological investigation of receptor inhibition (IC50) and does not report population pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Daniels_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glycine receptors and contains no pharmacokinetic parameters for methohexital. |
| popPK | Fischer_1995 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of blood-brain barrier permeability and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Kraus_1984 | relevant | 9 | 3 | The study reports a two-compartment model and qualitative changes in clearance and half-life for methohexital in children, but specific numeric values for CL, V, and Q are not provided in the evidence text. |
| popPK | Pain_1996 | irrelevant | 0 | 0 | The study is a behavioral neuroscience experiment assessing affective state (place preference) in rats, containing no pharmacokinetic parameters or models for methohexital. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blockade in rat neurons, not a pharmacokinetic study of drug disposition. |
| popPK | Voss_2007 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
