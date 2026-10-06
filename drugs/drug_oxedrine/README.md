<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;oxedrine&quot;}]"></div>

# oxedrine

- **generic name:** oxedrine
- **ATC codes:** `C01CA08`, `S01GA06`
- **DrugBank:** [DB09203](https://go.drugbank.com/drugs/DB09203) · **PubChem:** not captured
- **groups:** investigational

## About

Oxedrine (synephrine) is a sympathomimetic, alpha-adrenergic agonist that acts as a vasoconstrictor and decongestant, and has been classified as a cardiac stimulant and eye decongestant. It is considered investigational, with no authorised marketing record in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421351](https://www.wikidata.org/wiki/Q421351) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:04 | 2:33 | 0/0/0 | 1/0/1 | 0/0/0 | 96,148/2,779 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/7 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Yuan_2024_FPDc](drugs/drug_oxedrine/pd_Yuan_2024_FPDc.md) | field potential duration ← Synephrine · direct linear effect | — | Yuan X et al., Non-invasive assessment of proarrhythmi…, Frontiers in cardiovascular… (2024) | [10.3389/fcvm.2024.1407138](https://doi.org/10.3389/fcvm.2024.1407138) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Pinckaers_2026_Vasocontractile_response_of_aorta_segments](drugs/drug_oxedrine/pd_Pinckaers_2026_Vasocontractile_response_of_aorta_segments.md) | Vasocontractile response of aorta segments ← p-synephrine · direct Emax (saturable) effect | — | Pinckaers NET et al., Potential Cardiovascular Risks of Phene…, Cardiovascular toxicology (2026) | [10.1007/s12012-026-10109-8](https://doi.org/10.1007/s12012-026-10109-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Pinckaers_2026_Vasocontractile_response_of_mesenteric_artery_segments](drugs/drug_oxedrine/pd_Pinckaers_2026_Vasocontractile_response_of_mesenteric_artery.md) | Vasocontractile response of mesenteric artery segments ← p-synephrine · direct Emax (saturable) effect | — | Pinckaers NET et al., Potential Cardiovascular Risks of Phene…, Cardiovascular toxicology (2026) | [10.1007/s12012-026-10109-8](https://doi.org/10.1007/s12012-026-10109-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Pinckaers_2026_Vasocontractile_response_of_renal_artery_segments](drugs/drug_oxedrine/pd_Pinckaers_2026_Vasocontractile_response_of_renal_artery_segm.md) | Vasocontractile response of renal artery segments ← p-synephrine · direct Emax (saturable) effect | — | Pinckaers NET et al., Potential Cardiovascular Risks of Phene…, Cardiovascular toxicology (2026) | [10.1007/s12012-026-10109-8](https://doi.org/10.1007/s12012-026-10109-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Yuan_2024_HR](drugs/drug_oxedrine/pd_Yuan_2024_HR.md) | beating rate ← Synephrine · direct Emax (saturable) effect | — | Yuan X et al., Non-invasive assessment of proarrhythmi…, Frontiers in cardiovascular… (2024) | [10.3389/fcvm.2024.1407138](https://doi.org/10.3389/fcvm.2024.1407138) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxedrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA1A (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpéné_1999.pdf` | Carpéné C et al., Selective activation of beta3-adrenocep…, Naunyn-Schmiedeberg's archi… (1999) | pd | 5 | [10.1007/pl00005357](https://doi.org/10.1007/pl00005357) | [10344530](https://www.ncbi.nlm.nih.gov/pubmed/10344530) | metadata signals extractable PD data (IC50) |
| `Wierenga_1990.pdf` | Wierenga JM et al., Octopamine uptake and metabolism in the…, Journal of neurochemistry (1990) | pd | 4 | [10.1111/j.1471-4159.1990.tb01897.x](https://doi.org/10.1111/j.1471-4159.1990.tb01897.x) | [2105376](https://www.ncbi.nlm.nih.gov/pubmed/2105376) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T10:03:05.128445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carpéné_1999 | irrelevant | 0 | 0 | The paper studies octopamine and beta3-adrenoceptors, not oxedrine pharmacokinetics. |
| PD | Carpéné_1999 | not_relevant | 0 | 0 | The paper studies octopamine's effect on beta3-adrenoceptors in fat cells and does not mention oxedrine or report any pharmacodynamic parameters for it. |
| popPK | Endoh_1976 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on alpha-adrenoceptors in rabbit myocardium and does not involve oxedrine or pharmacokinetic parameters. |
| PD | Endoh_1976 | not_relevant | 4 | 2 | The paper describes dose-response relationships for sympathomimetic amines (including oxedrine/epinine) but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data in the provided text. |
| popPK | Gutiérrez-Hellín_2018 | irrelevant | 0 | 0 | The study investigates the metabolic effects of p-synephrine on fat oxidation, not the pharmacokinetics of oxedrine. |
| popPK | Haller_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of synephrine and caffeine, not oxedrine. |
| PD | Haller_2008 | not_relevant | 2 | 1 | The study reports PK data and qualitative/mean differences in physiological endpoints (BP, glucose) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable PD curve. |
| popPK | Ke_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of synephrine, not oxedrine. |
| PD | Ke_2025 | not_relevant | 0 | 0 | The paper studies synephrine, not oxedrine, and reports only PK parameters and qualitative efficacy without a quantitative exposure-response model. |
| popPK | Kim_2001 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of p-synephrine stereoisomers, not the pharmacokinetics of oxedrine. |
| popPK | Ko_2007 | irrelevant | 0 | 0 | The paper studies the anti-inflammatory mechanisms of Evodia rutaecarpa components in vitro and does not involve oxedrine or pharmacokinetic parameters. |
| popPK | Louw_2000 | irrelevant | 0 | 0 | The paper investigates the inhibition of cytochrome P450c11 by biogenic amines and a specific compound, and does not involve the drug oxedrine or its pharmacokinetics. |
| PD | Louw_2000 | not_relevant | 0 | 0 | The paper investigates the interaction of biogenic amines and a specific compound (Compound A) with cytochrome P450c11, not the drug oxedrine. |
| popPK | Minamijima_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of synephrine in horses, not oxedrine. |
| popPK | Minker_1978 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of adrenergic agonists on guinea pig smooth muscle and does not involve oxedrine or pharmacokinetic parameters. |
| PD | Minker_1978 | not_relevant | 0 | 0 | The paper does not mention oxedrine; it analyzes the effects of other adrenergic agonists (adrenaline, noradrenaline, etc.) on guinea pig ileum. |
| popPK | Mulloney_1987 | irrelevant | 0 | 0 | The paper studies neurophysiology in crayfish and does not involve the drug oxedrine or pharmacokinetic parameters. |
| PGx | Nabekura_2008 | not_relevant | 0 | 0 | The paper investigates the effects of citrus phytochemicals on drug transporters, not the effect of a gene variant on the PK/PD of oxedrine. |
| popPK | Pinckaers_2025 | irrelevant | 0 | 0 | The study focuses on phenethylamine analogues (e.g., higenamine, synephrine) and does not mention or report pharmacokinetic parameters for oxedrine. |
| popPK | Pinckaers_2026 | irrelevant | 0 | 0 | The paper investigates the vasocontractile effects of phenethylamine analogues in rat arteries and does not mention oxedrine or report any pharmacokinetic parameters for it. |
| popPK | Saleem_2013 | irrelevant | 0 | 0 | The study investigates the uterine contractile effects of a plant extract in mice and does not involve oxedrine or pharmacokinetic parameters. |
| PD | Saleem_2013 | not_relevant | 0 | 0 | The paper studies Haloxylon salicornicum and its constituents (synephrine, N-methyltyramine), not oxedrine. |
| popPK | Vatsavai_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gliclazide, not oxedrine. |
| PD | Vatsavai_2018 | not_relevant | 2 | 1 | The paper reports time-course pharmacodynamic effects (glucose reduction) and non-compartmental PK parameters, but does not provide a concentration-effect model, Emax/EC50, or any numeric PD parameters linking drug exposure to effect. |
| popPK | Wierenga_1990 | irrelevant | 0 | 0 | The paper concerns octopamine in insect nervous systems, not oxedrine pharmacokinetics. |
| PD | Wierenga_1990 | not_relevant | 0 | 0 | The paper focuses on octopamine (a neurotransmitter) in insects, not the drug oxedrine, and does not report any pharmacodynamic or exposure-response data for oxedrine. |
| PGx | Yu_2003 | not_relevant | 0 | 0 | The paper investigates endogenous substrates of CYP2D6 (5-MDMT and pinoline) and does not mention oxedrine or its pharmacokinetics/pharmacodynamics. |
| popPK | Yuan_2024 | irrelevant | 0 | 0 | The paper studies the proarrhythmic effects of synephrine and isoprenaline in cardiomyocytes and does not mention oxedrine or report its pharmacokinetic parameters. |
| popPK | Zheng_2014 | irrelevant | 0 | 0 | The paper studies p-synephrine as a receptor agonist in vitro, not oxedrine pharmacokinetics. |
| PD | Zheng_2014 | not_relevant | 0 | 0 | The paper reports pharmacological data for p-synephrine, not oxedrine. |
| popPK | Zhidkova_2025 | irrelevant | 0 | 0 | The paper studies synephrine derivatives (specifically 10S-E2) as glucocorticoid receptor modulators, not the drug oxedrine, and contains no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
