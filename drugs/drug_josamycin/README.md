<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;josamycin&quot;}]"></div>

# josamycin

- **generic name:** josamycin
- **ATC codes:** `J01FA07`
- **DrugBank:** [DB01321](https://go.drugbank.com/drugs/DB01321) · **PubChem:** [CID 5282165](https://pubchem.ncbi.nlm.nih.gov/compound/5282165)
- **molar mass:** 827.995 g/mol (C42H69NO15) — DrugBank
- **groups:** investigational

## About

Josamycin is a macrolide antibiotic used against infections such as bronchitis, boutonneuse fever, and Mycoplasma pneumonia. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423369](https://www.wikidata.org/wiki/Q423369) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:06 | 14:23 | 0/0/0 | 1/3/0 | 0/0/0 | 444,850/4,006 | einfracz / qwen3.8-27b | 27 | 0/25 | 27/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baba_1985_effective_rating](drugs/drug_josamycin/pd_Baba_1985_effective_rating.md) | clinical efficacy ← josamycin · model not identified | — | Baba S et al., [Clinical evaluation of the TMS-19-Q.GC…, The Japanese journal of ant… (1985) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Baba_1985_eradication_rate](drugs/drug_josamycin/pd_Baba_1985_eradication_rate.md) | bacteriological effect ← josamycin · model not identified | — | Baba S et al., [Clinical evaluation of the TMS-19-Q.GC…, The Japanese journal of ant… (1985) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Baba_1985_incidence_of_side_effect](drugs/drug_josamycin/pd_Baba_1985_incidence_of_side_effect.md) | safety ← josamycin · model not identified | — | Baba S et al., [Clinical evaluation of the TMS-19-Q.GC…, The Japanese journal of ant… (1985) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Baba_1985_usefulness_rate](drugs/drug_josamycin/pd_Baba_1985_usefulness_rate.md) | utility ← josamycin · model not identified | — | Baba S et al., [Clinical evaluation of the TMS-19-Q.GC…, The Japanese journal of ant… (1985) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">bird</span> | [González_2007_none](drugs/drug_josamycin/pd_Gonz_lez_2007_none.md) | none biomarker turnover ← none | — | González de la Huebra MJ et al., Sample preparation strategy for the sim…, Journal of pharmaceutical a… (2007) | [10.1016/j.jpba.2006.12.008](https://doi.org/10.1016/j.jpba.2006.12.008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kuno_1988_MIC](drugs/drug_josamycin/pd_Kuno_1988_MIC.md) | MIC ← josamycin · inhibition effect | — | Kuno K et al., [Laboratory and clinical studies of rok…, The Japanese journal of ant… (1988) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Okolicsanyi_1985_none](drugs/drug_josamycin/pd_Okolicsanyi_1985_none.md) | none ← none · model not identified | — | Okolicsanyi L et al., Pharmacokinetics of Josamycin in patien…, International journal of cl… (1985) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 861 matched, 74 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_1997.pdf` | Li GC et al., [A comparative study on the pharmacokin…, Yao xue xue bao = Acta phar… (1997) | popPK | 7 | not captured | [11327029](https://pubmed.ncbi.nlm.nih.gov/11327029) | The paper describes a pharmacokinetic study of josamycin in humans fitting a one-compartment model, but the abstract and provided evidence do not contain any specific numeric parameter values (CL, V, t1/2, etc.). |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T12:00:20.900326+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexandre_2025 | irrelevant | 0 | 0 | The study focuses on the antimicrobial activity of delafloxacin and ciprofloxacin against E. coli and does not investigate the pharmacokinetics of josamycin. |
| popPK | Aubry_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetic/pharmacodynamic modeling of ceftazidime/avibactam and colistin in vitro, and josamycin is not mentioned or studied. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for therapeutic enzymes (e.g., imiglucerase, avalglucosidase) in lysosomal storage diseases and does not contain any data for josamycin. |
| popPK | Calderin_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorfequiline and its metabolite M3, not josamycin. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for busulfan, not josamycin. |
| popPK | Cendrós_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for enflicoxib (a veterinary NSAID), not for the target drug josamycin. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study concerns the pharmacokinetics of paliperidone, not josamycin. |
| popPK | Dunlap_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of tacrolimus, not josamycin. |
| popPK | Esmaeili_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and viral dynamics of nirmatrelvir, not josamycin. |
| popPK | Hanafin_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and toxicity of polymyxin B, not josamycin. |
| popPK | Hornik_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for furosemide, not josamycin. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for everolimus, not josamycin. |
| popPK | Li_1997 | relevant | 7 | 0 | The paper describes a pharmacokinetic study of josamycin in humans fitting a one-compartment model, but the abstract and provided evidence do not contain any specific numeric parameter values (CL, V, t1/2, etc.). |
| popPK | Magnas_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for elexacaftor, tezacaftor, and ivacaftor, not josamycin. |
| popPK | McCann_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for diazepam, not josamycin. |
| popPK | Methaneethorn_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for azithromycin, not the subject drug josamycin. |
| popPK | Mohammed_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not josamycin. |
| popPK | Mohammed_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of tacrolimus (a calcineurin inhibitor) and contains no data for josamycin. |
| popPK | Pool_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of horse anti-thymocyte globulin (ATGAM) in humans, not josamycin. |
| popPK | Pérez-Blanco_2022 | irrelevant | 0 | 0 | The paper is an editorial for a special issue on Model-Informed Precision Dosing and does not contain original pharmacokinetic data or parameters for josamycin. |
| popPK | Randell_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of metronidazole, not josamycin. |
| popPK | Rega_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, not josamycin. |
| popPK | Santos_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of amphotericin B in rats, not josamycin. |
| popPK | Shah_2026 | irrelevant | 0 | 0 | The paper investigates CAR T-cell dynamics against AML using mathematical modeling and in vitro assays; it does not study the pharmacokinetics of josamycin. |
| popPK | Steichert_2025 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of enalapril and enalaprilat, not josamycin. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-fluorouracil (5-FU), not josamycin. |
| popPK | Upton_2025 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of cycloserine/terizidone and clofazimine, not josamycin. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salbutamol (a bronchodilator), not josamycin. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for bosutinib, not josamycin. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and machine learning modeling of tacrolimus, not josamycin. |
| popPK | de_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for unfractionated heparin, not josamycin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
