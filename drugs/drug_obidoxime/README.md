<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;obidoxime&quot;}]"></div>

# obidoxime

- **generic name:** obidoxime
- **ATC codes:** `V03AB13`
- **DrugBank:** [DB13750](https://go.drugbank.com/drugs/DB13750) · **PubChem:** not captured
- **molar mass:** 288.3018 g/mol (C14H16N4O3) — DrugBank
- **groups:** experimental

## About

Obidoxime is an antidote used to treat poisoning by organophosphate nerve agents and pesticides. It is not an approved medicine in most countries and is used mainly in specialised settings such as hospitals for emergency poisoning cases.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27284629](https://www.wikidata.org/wiki/Q27284629) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:12 | 0:40 | 0/0/0 | 2/1/0 | 0/0/0 | 26,513/1,521 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Marquart_2019_AChE_activity](drugs/drug_obidoxime/pd_Marquart_2019_AChE_activity.md) | AChE activity reactivation in sarin-inhibited human small bowel ← obidoxime · direct sigmoid Emax (Hill) effect | — | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tränkle_1996_allosteric_delay_of_dissociation_of_N_3H_methylscopolamine_from_porcine_heart_M2_receptors](drugs/drug_obidoxime/pd_Tr_nkle_1996_allosteric_delay_of_dissociation_of_N_3H_methyl.md) | allosteric delay of dissociation of N-[3H]methylscopolamine from porcine heart M2 receptors ← obidoxime · inhibition effect | — | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Marquart_2018_smooth_muscle_relaxation_of_pre_contracted_human_small_bowel_jejunum_ileum](drugs/drug_obidoxime/pd_Marquart_2018_smooth_muscle_relaxation_of_pre_contracted_hum.md) | smooth muscle relaxation of pre-contracted human small bowel (jejunum/ileum) ← obidoxime · direct Emax (saturable) effect | — | Marquart K et al., Human small bowel as a useful tool to i…, Toxicology letters (2018) | [10.1016/j.toxlet.2017.11.012](https://doi.org/10.1016/j.toxlet.2017.11.012) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=obidoxime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alioth-Streichenberg_1991.pdf` | Alioth-Streichenberg CM et al., Pharmacokinetics and pharmacodynamics o…, Toxicology and applied phar… (1991) | popPK | 8 | [10.1016/0041-008x(91)90097-x](https://doi.org/10.1016/0041-008x(91)90097-x) | [2020972](https://pubmed.ncbi.nlm.nih.gov/2020972) | Rat PK study with two-compartment model and half-lives reported, but full parameters (CL, V) are not given numerically in the abstract. |
| `Thiermann_2009.pdf` | Thiermann H et al., Obidoxime in acute organophosphate pois…, Clinical toxicology (Philad… (2009) | popPK | 6 | [10.1080/15563650903206836](https://doi.org/10.1080/15563650903206836) | [19778190](https://pubmed.ncbi.nlm.nih.gov/19778190) | Human obidoxime PK/PD study with measured plasma obidoxime concentrations, but no numeric disposition parameters (CL, V, half-life) appear in the evidence. |
| `Marquart_2019.pdf` | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | pd | 5 | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) | [30763608](https://www.ncbi.nlm.nih.gov/pubmed/30763608) | metadata signals extractable PD data (EC50) |
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 | not captured | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Marquart_2018.pdf` | Marquart K et al., Human small bowel as a useful tool to i…, Toxicology letters (2018) | pd | 4 | [10.1016/j.toxlet.2017.11.012](https://doi.org/10.1016/j.toxlet.2017.11.012) | [29154801](https://www.ncbi.nlm.nih.gov/pubmed/29154801) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T19:11:49.611605+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alioth-Streichenberg_1991 | relevant | 8 | 4 | Rat PK study with two-compartment model and half-lives reported, but full parameters (CL, V) are not given numerically in the abstract. |
| popPK | Chiou_1994 | irrelevant | 0 | 0 | In-vitro mechanistic/pharmacodynamic study (EC50 values, no PK disposition parameters for obidoxime). |
| popPK | Horn_2023 | irrelevant | 0 | 0 | In-vitro hepatotoxicity study in HepaRG spheroids with no PK disposition parameters for obidoxime. |
| popPK | Marquart_2018 | irrelevant | 0 | 0 | In-vitro tissue bath study of smooth muscle effects (EC50, AChE activity), no PK disposition parameters for obidoxime. |
| popPK | Marquart_2019 | irrelevant | 0 | 0 | In-vitro tissue model reporting EC50 pharmacodynamics, not PK disposition parameters for obidoxime. |
| popPK | Thiermann_2009 | relevant | 6 | 2 | Human obidoxime PK/PD study with measured plasma obidoxime concentrations, but no numeric disposition parameters (CL, V, half-life) appear in the evidence. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | In-vitro receptor binding study; obidoxime is only an allosteric modulator EC50, no PK disposition parameters. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | In-vitro receptor binding study where obidoxime is only an allosteric tool compound; no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
