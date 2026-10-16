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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Marquart_2019_AChE_activity](drugs/drug_obidoxime/pd_Marquart_2019_AChE_activity.md) | AChE activity reactivation in sarin-inhibited human small bowel ← obidoxime · direct sigmoid Emax (Hill) effect | — | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Tränkle_1996_allosteric_delay_of_dissociation_of_N_3H_methylscopolamine_from_porcine_heart_M2_receptors](drugs/drug_obidoxime/pd_Tr_nkle_1996_allosteric_delay_of_dissociation_of_N_3H_methyl.md) | allosteric delay of dissociation of N-[3H]methylscopolamine from porcine heart M2 receptors ← obidoxime · inhibition effect | — | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Marquart_2018_smooth_muscle_relaxation_of_pre_contracted_human_small_bowel_jejunum_ileum](drugs/drug_obidoxime/pd_Marquart_2018_smooth_muscle_relaxation_of_pre_contracted_hum.md) | smooth muscle relaxation of pre-contracted human small bowel (jejunum/ileum) ← obidoxime · direct Emax (saturable) effect | — | Marquart K et al., Human small bowel as a useful tool to i…, Toxicology letters (2018) | [10.1016/j.toxlet.2017.11.012](https://doi.org/10.1016/j.toxlet.2017.11.012) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=obidoxime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
