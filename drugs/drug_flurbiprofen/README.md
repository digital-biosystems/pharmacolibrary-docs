# flurbiprofen

- **generic name:** flurbiprofen
- **ATC codes:** `M01AE09`, `M02AA19`, `R02AX01`, `S01BC04`
- **DrugBank:** [DB00712](https://go.drugbank.com/drugs/DB00712)
- **groups:** approved, investigational

## About

**Description.** Flurbiprofen, a propionic acid derivative, is a nonsteroidal anti-inflammatory agent (NSAIA) with antipyretic and analgesic activity. Oral formulations of flurbiprofen may be used for the symptomatic treatment of rheumatoid arthritis, osteoarthritis and anklylosing spondylitis. Flurbiprofen may also be used topically prior to ocular surgery to prevent or reduce intraoperative miosis. Flurbiprofen is structurally and pharmacologically related to fenoprofen, ibuprofen, and ketoprofen.

**Indication.** Flurbiprofen tablets are indicated for the acute or long-term symptomatic treatment of rheumatoid arthritis, osteorarthritis and anklosing spondylitis. It may also be used to treat pain associated with dysmenorrhea and mild to moderate pain accompanied by inflammation (e.g. bursitis, tendonitis, soft tissue trauma). Topical ophthalmic formulations may be used pre-operatively to prevent intraoperative miosis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/2/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 3/0 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Yao_2025](drugs/drug_flurbiprofen/Flurbiprofen_Yao2025_reference.md) | Yao H et al., Exploring the Population Pharmacokineti…, Drug design, development an… (2025) | [10.2147/DDDT.S542722](https://doi.org/10.2147/DDDT.S542722) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kumpulainen_2010_2](drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference.md) | Kumpulainen E et al., Plasma and cerebrospinal fluid pharmaco…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03720.x](https://doi.org/10.1111/j.1365-2125.2010.03720.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2018](drugs/drug_flurbiprofen/Flurbiprofen_Zhang2018_reference.md) | Zhang J et al., Population pharmacokinetic modeling of…, Journal of pain research (2018) | [10.2147/JPR.S176475](https://doi.org/10.2147/JPR.S176475) |

## Coverage

- **PubMed hits:** 36 matched, 20 returned
- **screened:** 3  ·  **relevant:** 7
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aarons_1991.pdf` | Aarons L, The kinetics of flurbiprofen in synovia…, Journal of pharmacokinetics… (1991) | popPK | 10 | [10.1007/BF03036250](https://doi.org/10.1007/BF03036250) | [1875281](https://pubmed.ncbi.nlm.nih.gov/1875281) | The paper explicitly reports quantitative population pharmacokinetic parameters (CL, V, ka, t1/2, and interindividual variability) for flurbiprofen derived from a NONMEM analysis in humans. |
| `Knihinicki_1990.pdf` | Knihinicki RD et al., Stereoselective disposition of ibuprofe…, Chirality (1990) | popPK | 10 | [10.1002/chir.530020303](https://doi.org/10.1002/chir.530020303) | [2252842](https://pubmed.ncbi.nlm.nih.gov/2252842) | The study explicitly reports quantitative two-compartment pharmacokinetic parameters including clearance, volume of distribution, and half-life for flurbiprofen enantiomers in rats. |
| `Menzel-Soglowek_1992.pdf` | Menzel-Soglowek S et al., Variability of inversion of (R)-flurbip…, Journal of pharmaceutical s… (1992) | popPK | 9 | [10.1002/jps.2600810909](https://doi.org/10.1002/jps.2600810909) | [1432634](https://pubmed.ncbi.nlm.nih.gov/1432634) | The paper reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-life) for flurbiprofen enantiomers in dogs, guinea pigs, rats, and gerbils. |
| `Wagner_1991.pdf` | Wagner JG et al., Stepwise determination of multicompartm…, Journal of pharmacokinetics… (1991) | popPK | 9 | [10.1007/BF01061665](https://doi.org/10.1007/BF01061665) | [1920088](https://pubmed.ncbi.nlm.nih.gov/1920088) | The paper reports quantitative compartmental pharmacokinetic parameters (CL/F, Vd/F, and microconstants) for flurbiprofen derived from human plasma concentration-time data. |

<sub>queue written 2026-07-18T04:28:50.849353+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | unknown_2019 | irrelevant | not captured | not captured | The text is an editorial notice regarding clinical trial registration discrepancies and contains no pharmacokinetic data or mention of flurbiprofen. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_flurbiprofen`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
