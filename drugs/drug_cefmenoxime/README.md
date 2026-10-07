<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefmenoxime&quot;}]"></div>

# cefmenoxime

- **generic name:** cefmenoxime
- **ATC codes:** `J01DD05`, `S01AA31`, `S02AA18`
- **DrugBank:** [DB00267](https://go.drugbank.com/drugs/DB00267) · **PubChem:** [CID 9570757](https://pubchem.ncbi.nlm.nih.gov/compound/9570757)
- **molar mass:** 511.558 g/mol (C16H17N9O5S3) — DrugBank
- **groups:** approved

## About

Cefmenoxime is a third-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibiotic, available for systemic use as well as in eye and ear preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4921166](https://www.wikidata.org/wiki/Q4921166) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:06 | 2:48 | 0/2/0 | 2/0/0 | 0/0/0 | 122,026/3,639 | einfracz / qwen3.8-27b | 2 | 0/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Granneman_1982_reference](drugs/drug_cefmenoxime/Cefmenoxime_Granneman1982_reference.md) | — | 1-compartment (no model) | 0 | Granneman GR et al., Intramuscular and intravenous pharmacok…, Antimicrobial agents and ch… (1982) | [10.1128/AAC.21.1.141](https://doi.org/10.1128/AAC.21.1.141) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sennello_1983_reference](drugs/drug_cefmenoxime/Cefmenoxime_Sennello1983_reference.md) | — | 1-compartment (no model) | 0 | Sennello LT et al., Effect of probenecid on the pharmacokin…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.6.803](https://doi.org/10.1128/AAC.23.6.803) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kurashige_1982_Clinical_efficacy](drugs/drug_cefmenoxime/pd_Kurashige_1982_Clinical_efficacy.md) | Clinical efficacy ← cefmenoxime · stimulation effect | — | Kurashige T et al., [Therapeutic effects of cefmenoxime in…, The Japanese journal of ant… (1982) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rabbit</span> | [Yamazaki_1981_CRf](drugs/drug_cefmenoxime/pd_Yamazaki_1981_CRf.md) | renal clearance ← cefmenoxime · inhibition effect | — | Yamazaki I et al., Comparison of the renal excretory mecha…, The Journal of antibiotics (1981) | [10.7164/antibiotics.34.1476](https://doi.org/10.7164/antibiotics.34.1476) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefmenoxime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 56 matched, 52 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fourtillan_1984.pdf` | Fourtillan JB et al., Pharmacokinetic study of cefmenoxime (S…, The American journal of med… (1984) | popPK | 10 | [10.1016/s0002-9343(84)80071-6](https://doi.org/10.1016/s0002-9343(84)80071-6) | [6097120](https://pubmed.ncbi.nlm.nih.gov/6097120) | The evidence contains explicit quantitative PK parameters (Ka, Vd, t1/2, F, renal fraction) for cefmenoxime in human volunteers. |
| `Granneman_1982.pdf` | Granneman GR et al., Intramuscular and intravenous pharmacok…, Antimicrobial agents and ch… (1982) | popPK | 10 | [10.1128/AAC.21.1.141](https://doi.org/10.1128/AAC.21.1.141) | [6282203](https://pubmed.ncbi.nlm.nih.gov/6282203) | The abstract reports quantitative PK parameters including beta-phase half-life (0.91 h), plasma clearance (254 ml/min), and qualitative trends for volume of distribution, though specific mean V values are not listed. |
| `Höffler_1983.pdf` | Höffler D et al., Pharmacokinetics of Cefmenoxime in norm…, Arzneimittel-Forschung (1983) | popPK | 10 | not captured | [6303362](https://pubmed.ncbi.nlm.nih.gov/6303362) | The study is a pharmacokinetic investigation of cefmenoxime in humans using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Konishi_1986.pdf` | Konishi K, Pharmacokinetics of cefmenoxime in pati…, Antimicrobial agents and ch… (1986) | popPK | 10 | [10.1128/AAC.30.6.901](https://doi.org/10.1128/AAC.30.6.901) | [3468882](https://pubmed.ncbi.nlm.nih.gov/3468882) | The study reports quantitative compartmental pharmacokinetic parameters (Vd, t1/2) for cefmenoxime in humans with numeric values clearly visible in the abstract. |
| `Polk_1984.pdf` | Polk RE et al., Cefmenoxime pharmacokinetics in patient…, Antimicrobial agents and ch… (1984) | popPK | 10 | [10.1128/AAC.26.3.322](https://doi.org/10.1128/AAC.26.3.322) | [6095752](https://pubmed.ncbi.nlm.nih.gov/6095752) | The abstract provides quantitative disposition parameters including terminal half-lives for five renal function groups and qualitative descriptions of clearance and volume of distribution relationships, although specific numeric values for CL and Vd are not listed in the text. |
| `Sennello_1983.pdf` | Sennello LT et al., Effect of probenecid on the pharmacokin…, Antimicrobial agents and ch… (1983) | popPK | 10 | [10.1128/AAC.23.6.803](https://doi.org/10.1128/AAC.23.6.803) | [6311084](https://pubmed.ncbi.nlm.nih.gov/6311084) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, half-life, renal clearance) for cefmenoxime in humans, with specific numeric values provided in the text. |
| `Kataoka_1985.pdf` | Kataoka K et al., [Study on the prostatic tissue levels o…, Hinyokika kiyo. Acta urolog… (1985) | popPK | 9 | not captured | [2409786](https://pubmed.ncbi.nlm.nih.gov/2409786) | The study reports PK parameters (half-life, AUC ratio) for cefmenoxime in humans, but specific values for clearance (CL) and volume (V) are not explicitly stated, only half-life and tissue distribution data are provided. |

<sub>queue written 2026-10-07T11:05:37.318547+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fukuda_2002 | irrelevant | 2 | 1 | Cefmenoxime is a comparator in a rabbit ocular study, and its specific pharmacokinetic parameters (AQC(max)) could not be calculated/reported, with raw data not provided. |
| popPK | Fukuda_2002_2 | irrelevant | 2 | 0 | Cefmenoxime is one of multiple drugs tested in an ocular study, and the abstract explicitly states its AQCmax could not be calculated by the one-compartment method, with no other quantitative PK parameters provided. |
| popPK | Höffler_1983 | relevant | 10 | 0 | The study is a pharmacokinetic investigation of cefmenoxime in humans using a two-compartment model, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:05 UTC</sub>
