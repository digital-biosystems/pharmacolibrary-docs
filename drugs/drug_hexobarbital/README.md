<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;hexobarbital&quot;}]"></div>

# hexobarbital

- **generic name:** hexobarbital
- **ATC codes:** `N01AF02`, `N05CA16`
- **DrugBank:** [DB01355](https://go.drugbank.com/drugs/DB01355) · **PubChem:** [CID 3608](https://pubchem.ncbi.nlm.nih.gov/compound/3608)
- **molar mass:** 236.267 g/mol (C12H16N2O3) — DrugBank
- **groups:** experimental

## About

Hexobarbital is a barbiturate that was used as a hypnotic and sedative and as a general anaesthetic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421183](https://www.wikidata.org/wiki/Q421183) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:22 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 21,641/1,143 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hexobarbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Breimer_1975.pdf` | Breimer DD et al., Pharmocokinetics of hexobarbital in man…, Journal of pharmacokinetics… (1975) | popPK | 10 | [10.1007/BF01066591](https://doi.org/10.1007/BF01066591) | [1127574](https://pubmed.ncbi.nlm.nih.gov/1127574) | The text explicitly reports quantitative pharmacokinetic parameters including metabolic clearance (123-360 ml/min), elimination half-life (160-441 min), and volume of distribution (1.10 ± 0.12 L/kg) for hexobarbital in a two-compartment model. |
| `Rietbrock_1981.pdf` | Rietbrock I et al., Hexobarbitone disposition at different…, British journal of anaesthe… (1981) | popPK | 10 | [10.1093/bja/53.3.283](https://doi.org/10.1093/bja/53.3.283) | [7470363](https://pubmed.ncbi.nlm.nih.gov/7470363) | The paper reports PK parameters for hexobarbitone (hexobarbital) in humans, but the abstract provides only relative changes (percentages) rather than the absolute numeric values (CL, V, t1/2) required for direct extraction. |
| `Drew_1977.pdf` | Drew R et al., Hexobarbital pharmacokinetics in rats a…, The Journal of pharmacology… (1977) | popPK | 9 | not captured | [864592](https://pubmed.ncbi.nlm.nih.gov/864592) | The paper reports quantitative PK parameters (clearance, elimination rate constant, volume of distribution) for hexobarbital in rats, but no specific numeric values are present in the provided text evidence. |
| `Milon_1979.pdf` | Milon H et al., Hexobarbital blood levels and effects o…, Arzneimittel-Forschung (1979) | popPK | 9 | not captured | [120744](https://pubmed.ncbi.nlm.nih.gov/120744) | The study reports a two-compartmental pharmacokinetic model for hexobarbital in rats, but the specific numeric parameter values are not present in the provided evidence. |
| `Guillot_2009.pdf` | Guillot E et al., [Human toxicokinetic of hexobarbital af…, Therapie (2009) | popPK | 8 | [10.2515/therapie/2009053](https://doi.org/10.2515/therapie/2009053) | [19863908](https://pubmed.ncbi.nlm.nih.gov/19863908) | Reports quantitative disposition parameter (half-life 61.8h) for hexobarbital, but lacks clearance or volume values and is a single case report rather than a population PK study. |

<sub>queue written 2026-10-07T05:21:57.586281+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altmayer_1979 | irrelevant | 2 | 0 | The paper discusses the change in compartmental models (one vs two) based on time of administration but provides no specific quantitative parameter values (CL, V, t1/2) in the evidence. |
| popPK | Drew_1977 | relevant | 9 | 1 | The paper reports quantitative PK parameters (clearance, elimination rate constant, volume of distribution) for hexobarbital in rats, but no specific numeric values are present in the provided text evidence. |
| popPK | Fondacaro_1989 | irrelevant | 0 | 0 | The paper studies the pharmacology of SK&F 35886, using hexobarbital only as a probe for CNS activity (sleep time) rather than reporting PK parameters for hexobarbital. |
| popPK | Gonzales_1995 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of barbiturates' effects on G-protein signaling and cAMP production, reporting no pharmacokinetic parameters for hexobarbital. |
| popPK | Guillot_2009 | relevant | 8 | 2 | Reports quantitative disposition parameter (half-life 61.8h) for hexobarbital, but lacks clearance or volume values and is a single case report rather than a population PK study. |
| popPK | Milon_1979 | relevant | 9 | 0 | The study reports a two-compartmental pharmacokinetic model for hexobarbital in rats, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Noordhoek_1971 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| popPK | Rietbrock_1981 | relevant | 10 | 4 | The paper reports PK parameters for hexobarbitone (hexobarbital) in humans, but the abstract provides only relative changes (percentages) rather than the absolute numeric values (CL, V, t1/2) required for direct extraction. |
| popPK | Sato_1983 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, parameters, or text related to hexobarbital pharmacokinetics. |
| popPK | Schneider_1992 | irrelevant | 0 | 0 | The study uses hexobarbital only as a depressant agent to induce heart failure in a guinea-pig heart-lung preparation, not as the subject of pharmacokinetic analysis. |
| popPK | Wong_1984 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of barbiturate effects on chloride flux in rat hippocampal slices, reporting no pharmacokinetic disposition parameters for hexobarbital. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
