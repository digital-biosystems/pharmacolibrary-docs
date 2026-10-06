<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;fenoldopam&quot;}]"></div>

# fenoldopam

- **generic name:** fenoldopam
- **ATC codes:** `C01CA19`
- **DrugBank:** [DB00800](https://go.drugbank.com/drugs/DB00800) · **PubChem:** [CID 3341](https://pubchem.ncbi.nlm.nih.gov/compound/3341)
- **molar mass:** 305.756 g/mol (C16H16ClNO3) — DrugBank
- **groups:** approved

## About

Fenoldopam is an antihypertensive vasodilator used to treat severe hypertension such as malignant or renovascular hypertension, and congestive heart failure. It is an approved medicine, mainly used in hospital settings for short-term control of high blood pressure.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2357007](https://www.wikidata.org/wiki/Q2357007) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fenoldopam | parent | 305.756 | C16H16ClNO3 | DrugBank | [3341](https://pubchem.ncbi.nlm.nih.gov/compound/3341) | Ziemniak_1989 |
| fenoldopam-8-sulfate | metabolite | 385.815 | C16H16ClNO6S | PubChem | [159097](https://pubchem.ncbi.nlm.nih.gov/compound/159097) | Ziemniak_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:20 | 7:03 | 0/1/0 | 0/0/1 | 0/0/0 | 64,826/10,888 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/2 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ziemniak_1989_reference](drugs/drug_fenoldopam/Fenoldopam_Ziemniak1989_reference.md) | — | general linear (no model) | 2 | Ziemniak JA et al., A retrospective analysis of fenoldopam…, Pharmaceutical research (1989) | [10.1023/a:1015990506743](https://doi.org/10.1023/a:1015990506743) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Grenader_1991_cAMP](drugs/drug_fenoldopam/pd_Grenader_1991_cAMP.md) | cyclic AMP (cAMP) synthesis ← fenoldopam · direct Emax (saturable) effect | — | Grenader A et al., Fenoldopam is a partial agonist at dopa…, The Journal of pharmacology… (1991) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fenoldopam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (inhibitor), ADRA1B (inhibitor), ADRA1D (inhibitor), ADRA2A (target), ADRA2B (target), ADRA2C (target), DRD1 (target), DRD5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 64 matched, 49 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ziemniak_1989.pdf` | Ziemniak JA et al., A retrospective analysis of fenoldopam…, Pharmaceutical research (1989) | popPK | 9 | [10.1023/a:1015990506743](https://doi.org/10.1023/a:1015990506743) | [2573048](https://pubmed.ncbi.nlm.nih.gov/2573048) | The paper reports quantitative population pharmacokinetic parameters (renal clearance, saturation model constants) for fenoldopam in humans. |
| `Jadhav_2009.pdf` | Jadhav PR et al., Leveraging prior quantitative knowledge…, Pharmaceutical statistics (2009) | pd | 5 | [10.1002/pst.394](https://doi.org/10.1002/pst.394) | [19610013](https://www.ncbi.nlm.nih.gov/pubmed/19610013) | metadata signals extractable PD data (exposureresponse) |
| `Ziemniak_1988.pdf` | Ziemniak JA et al., Continuous intragastric delivery of fen…, British journal of clinical… (1988) | pd | 5 | [10.1111/j.1365-2125.1988.tb03315.x](https://doi.org/10.1111/j.1365-2125.1988.tb03315.x) | [2896014](https://www.ncbi.nlm.nih.gov/pubmed/2896014) | metadata signals extractable PD data (Emax) |
| `Asghar_2002.pdf` | Asghar M et al., Higher basal serine phosphorylation of…, American journal of physiol… (2002) | pd | 4 | [10.1152/ajprenal.00361.2001](https://doi.org/10.1152/ajprenal.00361.2001) | [12110520](https://www.ncbi.nlm.nih.gov/pubmed/12110520) | metadata signals extractable PD data (IC50) |
| `Pizzi_1988.pdf` | Pizzi M et al., Dopamine D2 receptor stimulation inhibi…, Brain research (1988) | pd | 4 | [10.1016/0006-8993(88)90222-3](https://doi.org/10.1016/0006-8993(88)90222-3) | [2974746](https://www.ncbi.nlm.nih.gov/pubmed/2974746) | metadata signals extractable PD data (IC50) |
| `Zeng_2004.pdf` | Zeng C et al., Aberrant D1 and D3 dopamine receptor tr…, Hypertension (Dallas, Tex.… (2004) | pd | 4 | [10.1161/01.HYP.0000114601.30306.bf](https://doi.org/10.1161/01.HYP.0000114601.30306.bf) | [14732731](https://www.ncbi.nlm.nih.gov/pubmed/14732731) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T09:17:06.676050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baxter_1991 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of vascular reactivity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Grenader_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and cAMP synthesis, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Grenader_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor agonism (cAMP accumulation) and does not report any pharmacokinetic disposition parameters for fenoldopam. |
| popPK | Gretler_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor activity in canine tracheal smooth muscle and does not report pharmacokinetic parameters. |
| popPK | Mak_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor affinity and efficacy, not a pharmacokinetic study of fenoldopam disposition. |
| popPK | Permeisari_2022 | irrelevant | 0 | 0 | The paper is a review discussing fenoldopam as a renal protector agent but does not report original quantitative pharmacokinetic parameters for fenoldopam. |
| PD | Permeisari_2022 | not_relevant | 1 | 0 | The paper is a narrative review discussing renal protective agents including fenoldopam but does not present original data, numeric PD parameters, or specific exposure-response curves. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neurotransmitter release in human atrial tissue, not a pharmacokinetic study, and reports no disposition parameters for fenoldopam. |
| PD | Rump_1995 | not_relevant | 2 | 1 | The study is an in vitro electrophysiology/pharmacology experiment on human atrial tissue, not a clinical PK/PD study; fenoldopam is only tested at discrete concentrations without a fitted concentration-response curve or derivable PD parameters like Emax/EC50. |
| PGx | Shi_2025 | not_relevant | 0 | 0 | The paper discusses fenoldopam only as a drug with a high pathway-pairing score for disease targets, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Shulman_1996 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of dopamine's effect on retinal Na+,K+-ATPase, using fenoldopam only as a D1 agonist probe, and reports no pharmacokinetic parameters. |
| popPK | Stephan_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal vascular reactivity in rats where fenoldopam is used as a comparator agent, not a pharmacokinetic study. |
| PGx | Tanaka_2004 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of fenoldopam on human arteries but does not investigate any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Undie_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine receptor signaling in rat brain slices, not a pharmacokinetic study of fenoldopam. |
| popPK | Zeng_2004 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Zeng_2004 | not_relevant | 0 | 0 | The paper discusses dopamine receptor transregulation in hypertension and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for fenoldopam. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor antagonism using isolated vascular rings, not a pharmacokinetic study reporting disposition parameters for fenoldopam. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor antagonism where fenoldopam is used only as a probe agonist, not a subject of PK analysis. |
| popPK | Ziemniak_1988 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 09:17 UTC</sub>
